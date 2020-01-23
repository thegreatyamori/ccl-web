/**
 * ***************************************
 * Centro Cristiano de Loja Web
 * @author Jerson Morocho
 *
 * ---------------------------------------
 * - Created & Added radio stream (25-ene-2020)
 * ---------------------------------------
 */

import { Component, OnInit } from "@angular/core";
import { environment } from "src/environments/environment";
import { RadioHelperService } from "src/app/services/radio-helper.service";
import { audioManager } from 'src/app/models/audioManager';

@Component({
  selector: "stream",
  template: `
    <audio
      [fullPlayer]="audioOptions.state"
      preload="auto"
      volume="{{ volume }}"
      (playing)="onPlaying($event)"
      (pause)="onStopped($event)"
      (ended)="onStopped($event)"
      (suspend)="onSuspend($event)"
      (waiting)="onStopped($event)"
    >
      <source src="{{ url }}" />
    </audio>
  `
})
export class StreamComponent implements OnInit {
  url: string;
  volume: number;
  audioOptions: audioManager;

  constructor(private helper: RadioHelperService) {}

  ngOnInit() {
    this.url = environment.radio;
    this.helper.customVolume.subscribe(volume => (this.volume = volume));
    this.helper.audioState.subscribe(
      (options: audioManager) => (this.audioOptions = options)
    );
  }

  /**
   * Cambia el estado a play
   * @param event evento playing
   */
  onPlaying(event: any): void {
    this.helper.manageAudio({ id: "external", state: true });
  }

  /**
   * Cambia el estado a pause
   * @param event evento pause
   */
  onStopped(event: any): void {
    this.helper.manageAudio({ id: "external", state: false });
  }

  /**
   * En espera de empezar a reproducir
   * @param event evento suspend
   */
  onSuspend(event: any): void {
    this.helper.manageAudio({ id: "initial", state: false });
  }
}
