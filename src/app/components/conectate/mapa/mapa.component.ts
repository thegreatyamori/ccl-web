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
import { Settings } from "src/config/config";
import { LightHDB, FilterState, ColorState } from "src/app/models/hdb";
import { Title } from "src/app/classes/title";

@Component({
  selector: "app-mapa",
  templateUrl: "./mapa.component.html",
  styleUrls: ["./mapa.component.scss"]
})
export class MapaComponent implements OnInit, AfterViewInit {
  titleSector: string;
  hoverSector: string;
  itemColor: string;
  filterPlaces: string[];
  filterState: FilterState;
  colorState: ColorState;
  paths: SVGAElement[];

  // variable donde se van a almacenar los hdbs
  _hdbs: LightHDB[];

  @ViewChildren("path") pathsRef: QueryList<ElementRef>;

  constructor(private renderer: Renderer2, private helper: HdbHelperService) {}

  ngOnInit(): void {
    this.titleSector = Settings.msg_mapa.click;
    this.hoverSector = Settings.msg_mapa.hover;
    this.filterPlaces = [];

    this.getData();
    this.getFilterState();
    this.getColorState();
  }

  ngAfterViewInit(): void {
    const paths = this.pathsRef
      .map(el => el.nativeElement)
      .map(el => {
        // añadimos un listener para que escuche todos los clicks en los paths
        this.renderer.listen(el, "click", (evt: MouseEvent) => {
          // verificamos si hay filtros activos
          if (this.filterState.title !== "Filtrar") {
            // verificamos si el elemento clickado es uno de los activos
            const place = this.filterPlaces.find(item => item === el.id);
            if (place) this.zoom(evt);
          } else this.zoom(evt);
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

    // seteamos el mapa
    const mapa = this.renderer.parentNode(paths[0]);
    this.helper.setMap(mapa);

    // retornamos una HTMLCollection de paths
    this.paths = paths;
  }

  /**
   * Obtenemos los datos desde el Observable hdbs$
   */
  getData() {
    this.helper.hdbs$.subscribe((hdbs: LightHDB[]) => (this._hdbs = hdbs));
  }

  /**
   * Retorna el estado del filtro
   */
  getFilterState(): void {
    this.helper.filterState$.subscribe(
      (state: FilterState) => (this.filterState = state)
    );
  }

  /**
   * Retorna el estado del color
   */
  getColorState(): void {
    this.helper.colorState$.subscribe(
      (state: ColorState) => (this.colorState = state)
    );
  }

  /**
   * Obtiene la referencia del elemento para aplicar zoom
   * @param evt Evento click
   */
  zoom(evt: MouseEvent): void {
    const path: SVGPathElement = this.renderer.selectRootElement(evt.target);

    // (active)= zoom(false) || (!active) = zoom(true)
    const state: boolean = path.classList.contains("active") ? false : true;

    // cambiamos el texto del titleSector
    this.titleSector = state ? Title.convert(path.id) : Settings.msg_mapa.click;

    this.helper.zoomManager(path, state);
  }

  /**
   * Coloca el titulo del path seleccionado durante un mouseenter
   * @param evt Evento click
   *
   */
  hoverEnter(evt: MouseEvent): void {
    const path: SVGAElement = this.renderer.selectRootElement(evt.target);
    this.hoverSector = Title.convert(path.id);
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
   * Aplica el filtro seleccionado
   * @param place contiene el color y la lista de ubicaciones
   */
  filter(places: string[]) {
    this.helper.reset("all");

    this.filterPlaces = places;

    places.forEach(place => {
      // buscamos cada ubicacion en el mapa
      const path = this.paths.find(item => item.id === place);

      // agregamos el color
      this.renderer.setStyle(path, "fill", Settings.base_theme.colors.active);
    });
  }
}
