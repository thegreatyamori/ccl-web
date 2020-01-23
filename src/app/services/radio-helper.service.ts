import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class RadioHelperService {
  // See more info: https://rxjs.dev/api/index/class/BehaviorSubject
  private isPlaying = new BehaviorSubject<boolean>(false);
  private volume = new BehaviorSubject<number>(0.6);
  private isRadioPageActive = new BehaviorSubject<boolean>(true);

  // Convertimos el BehaviorSubject en un observable
  public audioState = this.isPlaying.asObservable();
  public customVolume = this.volume.asObservable();
  public miniPlayerActive = this.isRadioPageActive.asObservable();

  constructor() {}

  /**
   * Cambia el estado de la variable isPlaying, permitiendo
   * alternar entre play/pause
   * @param state el estado a cambiar
   */
  public changeState(state: boolean): void {
    this.isPlaying.next(state);
    console.log(state);
  }

  /**
   * Cambia el valor del volumen, permitiendo subir/bajar
   * el sonido.
   * @param volume el valor del volumen en el rango [0, 1]
   */
  public changeVolume(volume: number): void {
    this.volume.next(volume);
  }

  /**
   * Cambia el estado de la variable isRadioPageActive,
   * alternar entre el reproductor full/mini.
   * @param state el estado a cambiar
   */
  public changeVisibility(state: boolean): void {
    // FIXME: verificar que funcione solo con el primer true
    if (this.isPlaying.getValue() === true) {
      this.isRadioPageActive.next(state);
    }
  }
}
