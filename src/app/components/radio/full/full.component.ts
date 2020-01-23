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

@Component({
  selector: "radio-full",
  templateUrl: "./full.component.html",
  styleUrls: ["./full.component.scss"]
})
export class FullComponent implements OnInit {
  volume: number;
  iconVolume: string;
  isPlaying: boolean;

  constructor(private helper: RadioHelperService) {}

  ngOnInit() {
    this.helper.audioState.subscribe(state => (this.isPlaying = state));
    this.helper.customVolume.subscribe(volume => (this.volume = volume));
    this.iconVolume = "volume-up";
  }

  /**
   * Cambia el estoado entre play/pause
   */
  switchState(): void {
    this.isPlaying = !this.isPlaying;
    this.helper.changeState(this.isPlaying);
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
