/**
 * ***************************************
 * Centro Cristiano de Loja Web
 * @author Jerson Morocho
 *
 * ---------------------------------------
 * - Creation (12-feb-2020)
 * ---------------------------------------
 */

import { Component, OnInit, Renderer2 } from "@angular/core";
import { DeviceDetectorService } from "ngx-device-detector";
import { HdbHelperService } from "src/app/services/hdb-helper.service";
import { MapState } from 'src/app/models/hdb';

@Component({
  selector: "app-buscador",
  templateUrl: "./buscador.component.html",
  styleUrls: ["./buscador.component.scss"]
})
export class BuscadorComponent implements OnInit {
  word: string;
  sector: string;
  isActive: boolean;
  isTablet: boolean;
  isMobile: boolean;
  isMapClicked: boolean;

  constructor(
    private deviceService: DeviceDetectorService,
    private helper: HdbHelperService
  ) {}

  ngOnInit(): void {
    this.word = "";
    this.sector = "";
    this.isTablet = this.deviceService.isTablet();
    this.isMobile = this.deviceService.isMobile();

    this.getCardState();
    this.getMapClicked();
  }

  /**
   * Verifica si se esta navegando desde una tablet | movil o un pc
   * para dispositivos moviles siempre retorna true
   */
  isDevice(): boolean {
    if (this.isMobile || this.isTablet) return true;

    return !this.isActive;
  }

  /**
   * Obtenemos el estado de la tarjeta, nos permite
   * cambiar la visibilidad del buscador
   */
  getCardState(): void {
    this.helper.isCardActive$.subscribe(
      (state: boolean) => (this.isActive = state)
    );
  }

  /**
   * Obtenemos los clicks en el mapa, nos permite
   * cambiar la visibilidad de la lista
   */
  getMapClicked(): void {
    this.helper.mapClicked$.subscribe((state: MapState) => {
      this.isMapClicked = state.isActive;
      this.sector = state.place;
    });
  }

  activateList(): boolean {
    // si la palabra tiene + de 2 letras y el mapa no esta activo
    return this.word.length > 2 && !this.isMapClicked;
  }

  /**
   * Resetea el mapa cuando la barra de busqueda esta en foco
   */
  zoomout(): void {
    // reset del mapa
    this.helper.reset("all");

    // reset del filtro
    this.helper.setFilterState({
      title: "Filtrar",
      type: false,
      day: false
    });
  }
}
