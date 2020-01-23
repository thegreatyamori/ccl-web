/**
 * ***************************************
 * Centro Cristiano de Loja Web
 * @author Jerson Morocho
 *
 * ---------------------------------------
 * - Created & Added radio stream (22-ene-2020)
 * ---------------------------------------
 */

import { Component, OnInit, Input } from '@angular/core';
import { RadioHelperService } from 'src/app/services/radio-helper.service';
import { audioManager } from 'src/app/models/audioManager';

@Component({
  selector: "radio-full",
  templateUrl: "./full.component.html",
  styleUrls: ["./full.component.scss"]
})
export class FullComponent implements OnInit {
  volume: number;
  iconVolume: string;
  audioOptions: audioManager;

  constructor(private helper: RadioHelperService) {}

  ngOnInit() {
    this.helper.audioState.subscribe((options: audioManager) => (this.audioOptions = options));
    this.helper.customVolume.subscribe(volume => (this.volume = volume));
    this.iconVolume = "volume-up";
  }

  /**
   * Cambia el estado entre play/pause
   */
  switchState(): void {
    this.audioOptions.state = !this.audioOptions.state;
    this.audioOptions.id = "full";
    this.helper.manageAudio(this.audioOptions);
  }

  /**
   * Cambia el icono en el reproductor
   * @param newVolume el valor del volumen en el rango [0, 1]
   */
  volumeControl(newVolume: number): void {
    this.volume = newVolume;
    this.helper.changeVolume(newVolume);

    this.iconVolume =
      newVolume === 0
        ? "volume-off"
        : newVolume <= 0.5
        ? "volume-down"
        : newVolume > 0.5
        ? "volume-up"
        : "";
  }
}
