import { Component, OnInit, Input, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { HdbHelperService } from "src/app/services/hdb-helper.service";
import { LightHDB, FilterState } from "src/app/models/hdb";
import { Settings } from "src/config/config";
import { Title } from "src/app/classes/title";

@Component({
  selector: "button-filtro",
  templateUrl: "./filtro.component.html",
  styleUrls: ["./filtro.component.scss"]
})
export class FiltroComponent implements OnInit {
  dropdown: FilterState;
  hdbs: LightHDB[];

  @Input() color: string;
  @Output("filter") onFilter = new EventEmitter<string[]>();

  constructor(private helper: HdbHelperService) {}

  ngOnInit(): void {
    this.getData();
    this.getFilterState();
  }

  /**
   * Retorna todos los hogares de bendicion de tipo LightHDB
   */
  getData(): void {
    this.helper.hdbs$.subscribe((hdbs: LightHDB[]) => (this.hdbs = hdbs));
  }

  /**
   * Retorna el estado del filtro
   */
  getFilterState(): void {
    this.helper.filterState$.subscribe(
      (state: FilterState) => (this.dropdown = state)
    );
  }

  /**
   * Muestra el menu para filtrar por tipo
   */
  selectTypeFilter(): void {
    this.helper.setFilterState({
      title: "Por Tipo",
      type: true,
      day: false
    });
  }

  /**
   * Muestra el menu para filtrar por día
   */
  selectDayFilter(): void {
    this.helper.setFilterState({
      title: "Por Día",
      type: false,
      day: true
    });
  }

  /**
   * Regresa al menú principal
   */
  back(): void {
    this.helper.setFilterState({
      title: "Filtrar",
      type: false,
      day: false
    });

    this.helper.reset("all");
  }

  /**
   * Filtra segun el dia
   * @param key dia|lugar del HDB
   */
  filter(key: string): void {
    // cambiamos el titulo del filtro seleccionado
    this.helper.setFilterState({
      title: Title.capitalize(key),
      type: this.dropdown.type,
      day: this.dropdown.day
    });

    // filtramos los hdbs que coinciden con el dia|lugar, luego
    // mapeamos las ubicaciones de los hdbs resultantes
    const _filtrados = this.hdbs
      .filter(item => {
        if (item.day === key) return item.day === key;
        else if (item.typeHDB === key) return item.typeHDB === key;
      })
      .map(item => item.place);

    // eliminamos las ubicaciones repetidas
    const ubicaciones = [...new Set(_filtrados)];

    // seteamos el color correspondiente
    const color = Settings.base_theme.colors.active;

    this.onFilter.emit(ubicaciones);
  }
}
