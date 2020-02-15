import { Component, OnInit, Input, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { HdbHelperService } from "src/app/services/hdb-helper.service";
import { LightHDB, Filter } from "src/app/models/hdb";
import { Settings } from "src/config/config";

@Component({
  selector: "button-filtro",
  templateUrl: "./filtro.component.html",
  styleUrls: ["./filtro.component.scss"]
})
export class FiltroComponent implements OnInit {
  dropdown: { title: string; type: boolean; day: boolean };
  hdbs: LightHDB[];

  @Input() color: string;
  @Output("reset") onReset = new EventEmitter<string>();
  @Output("filter") onFilter = new EventEmitter<Filter>();

  constructor(private helper: HdbHelperService) {}

  ngOnInit(): void {
    this.dropdown = {
      title: "Filtrar",
      type: false,
      day: false
    };

    this.getData();
  }

  /**
   * Retorna todos los hogares de bendicion de tipo LightHDB
   */
  getData(): void {
    this.helper.hdbs$.subscribe((hdbs: LightHDB[]) => (this.hdbs = hdbs));

    // cambiamos la visibilidad del buscador
    // TODO: revisar si se utiliza este pedazo de codigo
    // this.helper.isCardActive$.subscribe(
    //   (state: boolean) => (this.isActive = state)
    // );
  }

  /**
   * Muestra el menu para filtrar por tipo
   */
  selectTypeFilter(): void {
    this.dropdown.title = "Por Tipo";
    this.dropdown.type = true;
  }

  /**
   * Muestra el menu para filtrar por día
   */
  selectDayFilter(): void {
    this.dropdown.title = "Por Día";
    this.dropdown.day = true;
  }

  /**
   * Regresa al menú principal
   */
  back(): void {
    this.dropdown = {
      title: "Filtrar",
      type: false,
      day: false
    };

    // Emitimos un evento para resetar el coloreado
    this.onReset.emit("all");
  }

  /**
   * Filtra segun el dia
   * @param key dia|lugar del HDB
   */
  filter(key: string): void {
    // cambiamos el titulo del filtro seleccionado
    this.dropdown.title = this.capitalize(key);

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

    this.onFilter.emit({
      name: key,
      color: color,
      places: ubicaciones
    });
  }

  /**
   * Capitaliza la primera letra de una palabra
   *  @param str cadena a capitalizar
   * @returns la cadena capitalizada
   */
  private capitalize(str: string): string {
    return str.replace(/(^|\s)([a-z])/g, (_m, p1, p2) => {
      return p1 + p2.toUpperCase();
    });
  }
}
