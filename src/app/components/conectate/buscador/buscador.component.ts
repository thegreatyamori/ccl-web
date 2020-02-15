/**
 * ***************************************
 * Centro Cristiano de Loja Web
 * @author Jerson Morocho
 *
 * ---------------------------------------
 * - Creation (12-feb-2020)
 * ---------------------------------------
 */

import { Component, OnInit, ViewChild } from "@angular/core";
import {
  trigger,
  transition,
  animate,
  keyframes,
  style
} from "@angular/animations";
import { LightHDB } from "src/app/models/hdb";
import { HdbHelperService } from "src/app/services/hdb-helper.service";
import { BottomSheetService } from "../card-v2/card-v2.service";
import { DeviceDetectorService } from "ngx-device-detector";
import { CardV2Component } from "../card-v2/card-v2.component";

@Component({
  selector: "app-buscador",
  templateUrl: "./buscador.component.html",
  styleUrls: ["./buscador.component.scss"],
  animations: [
    trigger("ZoomInOut", [
      transition(":enter", [
        animate(
          500,
          keyframes([
            style({
              opacity: 0,
              transform: "scale3d(0.3, 0.3, 0.3)",
              offset: 0
            }),
            style({ offset: 1 })
          ])
        )
      ]),
      transition(":leave", [
        animate(
          500,
          keyframes([
            style({
              opacity: 0,
              transform: "scale3d(0.3, 0.3, 0.3)",
              offset: 1
            })
          ])
        )
      ])
    ])
  ]
})
export class BuscadorComponent implements OnInit {
  filterHDB: string;
  isClicked: boolean;
  isActive: boolean;
  isTablet: boolean;
  isMobile: boolean;

  // variables para la paginacion
  page: number;
  itemsPerPage: number;
  previousPage: number;

  hdbs: LightHDB[];

  @ViewChild(CardV2Component) card: CardV2Component;

  constructor(
    private helper: HdbHelperService,
    private deviceService: DeviceDetectorService,
    private bottomSheet: BottomSheetService
  ) {}

  ngOnInit(): void {
    this.filterHDB = "";
    this.isClicked = false;
    this.isTablet = this.deviceService.isTablet();
    this.isMobile = this.deviceService.isMobile();
    this.itemsPerPage = 6;
    this.page = 1;
    this.getData();
  }

  /**
   * Verifica si se esta navegando desde una tablet | movil o un pc
   * para dispositivos moviles siempre retorna true
   */
  isDevice(): boolean {
    if (this.isMobile || this.isTablet) {
      return true;
    }

    return !this.isActive;
  }

  /**
   * Retorna todos los hogares de bendicion de tipo LightHDB
   */
  getData(): void {
    this.helper.hdbs$.subscribe((hdbs: LightHDB[]) => (this.hdbs = hdbs));

    // cambiamos la visibilidad del buscador
    this.helper.isCardActive$.subscribe(
      (state: boolean) => (this.isActive = state)
    );
  }

  /**
   * Retorna el valor inicial segun el resultado del filtro de hdbs
   */
  startPagination(): number {
    return (this.page - 1) * this.itemsPerPage;
  }

  /**
   * Retorna el valor final en segun el resultado del filtro de hdbs
   */
  endPagination(): number {
    return (this.page - 1) * this.itemsPerPage + this.itemsPerPage;
  }

  /**
   * Permite abrir una tarjeta o un bottomSheet
   */
  open(item: LightHDB): void {
    // cargamos el elemento seleccionado
    this.helper.setItem(item);

    // cambiamos la visibilidad de la tarjeta
    this.helper.changeVisibility(true);

    // dependiendo del tipo de dispositivo se abre una tarjeta
    if (this.isMobile || this.isTablet) {
      // en dispositivos moviles se abre el modal
      this.bottomSheet.open(this.card);
    }
  }
}
