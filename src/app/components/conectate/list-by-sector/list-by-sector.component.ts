import { Component, OnInit, Input } from "@angular/core";
import { HdbHelperService } from "src/app/services/hdb-helper.service";
import { LightHDB, FilterState } from "src/app/models/hdb";

@Component({
  selector: "app-list-by-sector",
  templateUrl: "./list-by-sector.component.html",
  styleUrls: ["./list-by-sector.component.scss"]
})
export class ListBySectorComponent implements OnInit {
  filterBy: string;
  isActive: boolean;
  hdbs: LightHDB[];

  // variables para la paginacion
  page: number;
  itemsPerPage: number;

  @Input() filtered: string;

  constructor(private helper: HdbHelperService) {}

  ngOnInit(): void {
    this.itemsPerPage = 6;
    this.page = 1;

    this.getData();
    this.getFilterState();
  }

  /**
   * Retorna todos los hogares de bendicion de tipo LightHDB
   */
  getFilterState(): void {
    this.helper.filterState$.subscribe(
      (state: FilterState) => (this.filterBy = state.title.toLowerCase())
    );
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
