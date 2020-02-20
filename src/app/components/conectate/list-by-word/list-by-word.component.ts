import { Component, OnInit, ViewChild, Input } from "@angular/core";
import { LightHDB } from "src/app/models/hdb";
import { HdbHelperService } from "src/app/services/hdb-helper.service";
import { DeviceDetectorService } from "ngx-device-detector";
import { CardV2Component } from "../card-v2/card-v2.component";
import { BottomSheetService } from "../card-v2/card-v2.service";

@Component({
  selector: "app-list-by-word",
  templateUrl: "./list-by-word.component.html",
  styleUrls: ["./list-by-word.component.scss"]
})
export class ListByWordComponent implements OnInit {
  isActive: boolean;
  isTablet: boolean;
  isMobile: boolean;

  // variables para la paginacion
  page: number;
  itemsPerPage: number;

  hdbs: LightHDB[];

  @Input() filtered: string;

  @ViewChild(CardV2Component) card: CardV2Component;

  constructor(
    private helper: HdbHelperService,
    private bottomSheet: BottomSheetService,
    private deviceService: DeviceDetectorService
  ) {}

  ngOnInit(): void {
    this.isTablet = this.deviceService.isTablet();
    this.isMobile = this.deviceService.isMobile();
    this.itemsPerPage = 6;
    this.page = 1;

    this.getData();
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
}
