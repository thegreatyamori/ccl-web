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
import { environment } from 'src/environments/environment';
import { RadioHelperService } from 'src/app/services/radio-helper.service';

@Component({
  selector: "stream",
  template: `
    <audio
      [fullPlayer]="isPlaying"
      preload="auto"
      volume="{{ volume }}"
      (playing)="onPlaying($event)"
      (pause)="onStopped($event)"
      (ended)="onStopped($event)"
      (suspend)="onStopped($event)"
      (waiting)="onStopped($event)"
    >
      <source src="{{ url }}" />
    </audio>
  `
})
export class StreamComponent implements OnInit {
  url: string;
  isPlaying: boolean;
  volume: number;

  constructor(private helper: RadioHelperService) {}

  ngOnInit() {
    this.url = environment.radio;
    this.helper.customVolume.subscribe(volume => (this.volume = volume));
    this.helper.audioState.subscribe(state => (this.isPlaying = state));
  }

  /**
   * Cambia el estado a play
   * @param event evento playing
   */
  onPlaying(event: any): void {
    this.helper.changeState(true);
  }

  /**
   * Cambia el estado a pause
   * @param event evento pause
   */
  onStopped(event: any): void {
    this.helper.changeState(false);
  }
}
