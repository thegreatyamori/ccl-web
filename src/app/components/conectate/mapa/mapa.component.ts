/**
 * ***************************************
 * Centro Cristiano de Loja Web
 * @author Jerson Morocho
 *
 * ---------------------------------------
 * - Creation (12-feb-2020)
 * ---------------------------------------
 */

import {
  Component,
  OnInit,
  Renderer2,
  QueryList,
  AfterViewInit,
  ViewChildren,
  ElementRef
} from "@angular/core";
import { HdbHelperService } from "src/app/services/hdb-helper.service";
import { BaseColors } from "src/app/models/config";
import { Settings } from "src/config/config";
import { Filter } from "src/app/models/hdb";

@Component({
  selector: "app-mapa",
  templateUrl: "./mapa.component.html",
  styleUrls: ["./mapa.component.scss"]
})
export class MapaComponent implements OnInit, AfterViewInit {
  titleSector: string;
  hoverSector: string;
  itemColor: string;
  filterName: string;
  filterColor: string;
  colorClass: string;
  baseTheme: BaseColors;
  paths: SVGAElement[];

  @ViewChildren("path") pathsRef: QueryList<ElementRef>;

  constructor(private renderer: Renderer2, private helper: HdbHelperService) {}

  ngOnInit(): void {
    this.baseTheme = Settings.base_theme;
    this.titleSector = Settings.msg_mapa.click;
    this.hoverSector = Settings.msg_mapa.hover;
    this.itemColor = this.baseTheme.colors.title;
    this.colorClass = this.baseTheme.classes.active;
    this.filterName = "";
    this.filterColor = "";
  }

  ngAfterViewInit(): void {
    const paths = this.pathsRef
      .map(el => el.nativeElement)
      .map(el => {
        // añadimos un listener para que escuche todos los clicks en los paths
        this.renderer.listen(el, "click", (evt: MouseEvent) => {
          this.zoom(evt);
        });

        // añadimos un listener para que escuche todos los mouseenter en los paths
        this.renderer.listen(el, "mouseenter", (evt: MouseEvent) => {
          this.hoverEnter(evt);
        });

        // añadimos un listener para que escuche todos los mouseleave en los paths
        this.renderer.listen(el, "mouseleave", (evt: MouseEvent) => {
          this.hoverLeave(evt);
        });

        return el;
      });

    // retornamos una HTMLCollection de paths
    this.paths = paths;
  }

  /**
   * Obtiene la referencia del elemento para aplicar zoom
   * @param evt Evento click
   */
  zoom(evt: MouseEvent): void {
    const path: SVGAElement = this.renderer.selectRootElement(evt.target);
    const name: string = path.id.split("_").join(" ");
    let color: string = this.baseTheme.colors.active;

    let state: boolean = path.classList.contains("active") ? false : true;

    // color igual a base_theme.active
    if (this.filterColor === color) {
      switch (this.filterName) {
        case "jovenes":
          this.colorClass = this.baseTheme.classes.active;
          color = this.baseTheme.colors.jovenes;
          break;
        case "damas":
          this.colorClass = this.baseTheme.classes.damas;
          color = this.baseTheme.colors.damas;
          break;
        case "caballeros":
          this.colorClass = this.baseTheme.classes.caballeros;
          color = this.baseTheme.colors.caballeros;
          break;
        case "matrimonios":
          this.colorClass = this.baseTheme.classes.matrimonios;
          color = this.baseTheme.colors.matrimonios;
          break;
        default:
          this.colorClass = this.baseTheme.classes.active;
          color = this.baseTheme.colors.active;
          break;
      }
    }

    // Eliminamos el estilo fill de todos los paths menos el seleccionado
    this.reset(path.id);

    // cambiamos el color y el texto del titleSector y hoverSector
    this.itemColor = state ? color : this.baseTheme.colors.title;
    this.titleSector = state ? name : Settings.msg_mapa.click;

    this.helper.zoom(path, state, this.colorClass);
  }

  /**
   * Coloca el titulo del path seleccionado durante un mouseenter
   * @param evt Evento click
   *
   */
  hoverEnter(evt: MouseEvent): void {
    const path: SVGAElement = this.renderer.selectRootElement(evt.target);
    const name: string = path.id.split("_").join(" ");

    this.hoverSector = name;
  }

  /**
   * Coloca el titulo del path seleccionado durante un mouseleave
   * @param evt Evento click
   *
   */
  hoverLeave(evt: MouseEvent): void {
    this.hoverSector = Settings.msg_mapa.hover;
  }

  /**
   * Eliminamos el estilo fill de los paths indicados
   * @param evt parametros aceptados [all | path.id]
   */
  reset(evt: string) {
    if (evt === "all") {
      const map = this.renderer.parentNode(this.paths[0]);

      this.renderer.removeAttribute(map, "transform");
    }

    this.paths.map(el => {
      if (evt === "all") {
        this.renderer.removeStyle(el, "fill");
        this.renderer.removeAttribute(el, "class");
        this.colorClass = this.baseTheme.classes.active;
        this.filterColor = "";
      } else if (el.id !== evt) {
        this.renderer.removeAttribute(el, "class");
      }
    });
  }

  /**
   * Aplica el filtro seleccionado
   * @param evt contiene el color y la lista de ubicaciones
   */
  filter(evt: Filter) {
    this.reset("all");

    // retornamos el nombre del filtro
    this.filterName = evt.name;
    this.filterColor = evt.color;

    evt.places.forEach(place => {
      // buscamos cada ubicacion en el mapa
      const path = this.paths.find(item => item.id === place);

      // agregamos el color
      this.renderer.setStyle(path, "fill", evt.color);
    });
  }
}
