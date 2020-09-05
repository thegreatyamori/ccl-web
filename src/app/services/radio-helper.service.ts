import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { audioManager } from '../models/audioManager';

@Injectable({
  providedIn: 'root',
})
export class RadioHelperService {
  // See more info: https://rxjs.dev/api/index/class/BehaviorSubject
  private audioControl = new BehaviorSubject<audioManager>({
    id: 'initial',
    state: false,
  });
  private volume = new BehaviorSubject<number>(0.6);
  private isRadioPageActive = new BehaviorSubject<boolean>(true);

  // Convertimos el BehaviorSubject en un observable
  audioState = this.audioControl.asObservable();
  customVolume = this.volume.asObservable();
  miniPlayerActive = this.isRadioPageActive.asObservable();

  constructor() {}

  /**
   * Cambia el estado de la variable isPlaying, permitiendo
   * alternar entre play/pause
   * @param state el estado a cambiar
   */
  manageAudio(options: audioManager): void {
    this.audioControl.next(options);
    // console.log(options);
  }

  /**
   * Cambia el valor del volumen, permitiendo subir/bajar
   * el sonido.
   * @param volume el valor del volumen en el rango [0, 1]
   */
  changeVolume(volume: number): void {
    this.volume.next(volume);
  }

  /**
   * Oculta/Desoculta el reproductor mini,
   * permitiendo alternar entre el reproductor full/mini.
   * @param state el estado a cambiar
   */
  playerHidden(state: boolean): void {
    this.isRadioPageActive.next(state);
  }
}
