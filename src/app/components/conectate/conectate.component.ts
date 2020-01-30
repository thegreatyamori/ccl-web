/**
 * ***************************************
 * Centro Cristiano de Loja Web
 * @author Jerson Morocho
 *
 * ---------------------------------------
 * - Creation (29-sep-2019)
 * - Added Title Document (9-nov-2019)
 * - Added Search Support (14-dec-2019)
 * ---------------------------------------
 */

import { Component, OnInit, Renderer2, Inject } from "@angular/core";
import { Title } from "@angular/platform-browser";
import {
  trigger,
  style,
  animate,
  transition,
  keyframes
} from "@angular/animations";
import { HdbService } from "src/app/services/hdb.service";
import { LightHDB } from "src/app/models/hdb";
import { WINDOW } from "src/app/services/window.service";

@Component({
  selector: "app-conectate",
  templateUrl: "./conectate.component.html",
  styleUrls: ["./conectate.component.scss"],
  animations: [
    trigger("fadeInOutRight", [
      transition(":enter", [
        style({ opacity: 0, transform: "translate3d(100%, 0, 0)" }),
        animate(
          500,
          style({
            opacity: 1,
            transform: "translate3d(0, 0, 0)"
          })
        )
      ]),
      transition(":leave", [
        animate(
          500,
          style({
            opacity: 0,
            transform: "translate3d(100%, 0, 0)"
          })
        )
      ])
    ]),
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
export class ConectateComponent implements OnInit {
  titleSector: string;
  filterHDB: string = "";
  phone: string = "";
  telephone: string = "";
  itemsPerPage: number = 6;
  previousPage: number;
  page: number = 1;
  zoom: number = 0;
  isCardActive: boolean;
  isPathActive: boolean;
  settings: any;
  hdb: LightHDB;
  hdbs: LightHDB[];

  constructor(
    private titleDocument: Title,
    private rest: HdbService,
    private renderer: Renderer2,
    @Inject(WINDOW) private window: Window
  ) {}

  ngOnInit() {
    this.titleDocument.setTitle("Conéctate");
    this.settings = {
      title: "¡Somos una iglesia celular!",
      bg_image: "assets/img/bg4.jpg",
      logo_title: "assets/img/logo_cropped.png"
    };
    this.titleSector = "haz click en cualquier parte del mapa";
    this.isCardActive = false;
    this.isPathActive = true;

    this.getAllHDBs();
  }

  /**
   * Retorna todos los hogares de bendicion de tipo LightHDB
   * */
  getAllHDBs(): void {
    this.rest.getAll().subscribe((data: LightHDB[]) => {
      this.hdbs = data;
      // console.log(data);
    });
  }

  /**
   * Muestra el contenido de un hogar de bendición formateado en una tarjeta
   * @param ref TemplateRef
   * @param hdbItem lista de hdb de tipo LightHDB
   */
  showCard(ref: any, hdbItem: LightHDB): void {
    let _pathName = hdbItem.place;
    let pathName = _pathName.split("_").join(" ");
    let path = ref.children[_pathName];

    let phone = hdbItem.telephone.toString();
    let telephone =
      hdbItem.alternative !== null ? hdbItem.alternative.toString() : "";

    // Asignamos un tipo de numero de telefono
    this.phone = phone.length === 9 ? "movil" : "convencional";
    this.telephone = telephone.length === 7 ? "convencional" : "movil";

    // asignamos el hogar de bendicion a visualizar
    this.hdb = hdbItem;

    // activamos la tarjeta y desactivamos la vista
    this.isCardActive = true;

    // Hacemos zoom en el mapa
    this.zoomPath({ path, pathName, state: true, color: hdbItem.color });
  }

  /**
   * Cierra la tarjeta y resetea el contenido
   * @param ref TemplateRef
   * @param _pathName nombre del sector
   */
  closeCard(ref: any, _pathName: string): void {
    let path = ref.children[_pathName];

    this.hdb = <LightHDB>{};
    this.isCardActive = false;
    this.zoomPath({
      path,
      pathName: "haz click en cualquier parte del mapa",
      state: false
    });
  }

  /**
   * Obtiene la referencia del elemento par aplicar zoom
   * @param evt Evento click
   */
  clickToZoom(evt: any): void {
    const path = evt.target;
    const _pathName = path.id.split("_");
    const pathName = _pathName.join(" ");

    this.zoomPath({ path, pathName, state: true, color: "orange" });
  }

  /**
   * Realiza el zoom dinamico
   * @param path path svg
   * @param pathName nombre del sector
   * @param state estado del sector
   * @param color el color que se va a pintar cuando el sector este seleccionado
   */
  private zoomPath({
    path,
    pathName,
    state,
    color
  }: {
    path: any;
    pathName: string;
    state: boolean;
    color?: string;
  }): void {
    // FIXME: usar renderer
    let map = path.parentNode;
    // console.log(map);

    let [xMap, yMap] = this.getBoundingBoxCenter(map);
    let [xPath, yPath] = this.getBoundingBoxCenter(path);

    // zoom dinamico
    this.zoom = this.getPathZoomValue({ map, path });

    // state == true aplica el zoom
    if (state) {
      let posX = xMap - this.zoom * xPath;
      let posY = yMap - this.zoom * yPath;
      this.renderer.setStyle(path, "fill", color);
      this.renderer.setAttribute(
        map,
        "transform",
        `translate(${posX}, ${posY})scale(${this.zoom})`
      );
    } else {
      this.renderer.removeStyle(path, "fill");
      this.renderer.removeAttribute(map, "transform");
    }
    this.renderer.setStyle(map, "transition", "transform 750ms");

    // dibujar un marcardor en el centro del path
    // this.drawPoint(map, xPath, yPath);

    // coloca el nombre del sector en una variable
    this.titleSector = pathName;

    // cambia el estado del path en cada click
    // this.isPathActive = !this.isPathActive;
  }

  /**
   * Obtine un valor de zoom en funcion del tamaño del elemento
   * @param map svg
   * @param path svg
   */
  private getPathZoomValue({
    map,
    path
  }: {
    map: SVGAElement;
    path: SVGAElement;
  }): number {
    // factor de margen
    let k = 50;
    let zoom = 0;
    let bboxMap = map.getBBox();
    let bboxPath = path.getBBox();
    let mapSize = {
      width: bboxMap.width,
      height: bboxMap.height,
      widthGroup: map.getBoundingClientRect().width,
      heightGroup: map.getBoundingClientRect().height
    };
    let pathSize = {
      width: bboxPath.width,
      height: bboxPath.height,
      widthPath: (mapSize.widthGroup * bboxPath.width) / mapSize.width + k,
      heightPath: (mapSize.heightGroup * bboxPath.height) / mapSize.height + k
    };

    if (pathSize.width > pathSize.height) {
      zoom = mapSize.widthGroup / pathSize.widthPath;
      if (zoom * pathSize.heightPath > mapSize.heightGroup)
        zoom = mapSize.heightGroup / pathSize.heightPath;
    } else {
      zoom = mapSize.heightGroup / pathSize.heightPath;
      if (zoom * pathSize.widthPath > mapSize.widthGroup)
        zoom = mapSize.widthGroup / pathSize.widthPath;
    }

    return zoom;
  }

  /**
   * Obtiene el centro de un elemento svg
   * @param el svg element
   */
  private getBoundingBoxCenter(el: SVGAElement): [number, number] {
    let bbox = el.getBBox();
    return [bbox.x + bbox.width / 2, bbox.y + bbox.height / 2];
  }

  /**
   * Dibuja un punto dentro de un svg
   * @param svg elemento svg
   * @param cx centro en x
   * @param cy centro en y
   */
  private drawPoint(svg: SVGAElement, cx: number, cy: number): void {
    var circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    circle.setAttribute("style", "stroke:transparent; fill:green");
    circle.setAttribute("r", "1");
    circle.setAttribute("cx", `${cx}`);
    circle.setAttribute("cy", `${cy}`);

    svg.appendChild(circle);
  }

  /**
   * valida si un numero tiene whatsApp
   * @returns un valor boleano
   */
  validateWhatsPhone(): boolean {
    return this.hdb.telephone.toString().length === 9;
  }

  /**
   * Abre whatsapp de acuerdo al primer numero indicado
   */
  openWhatsapp(): void {
    this.window.open(`https://wa.me/593${this.hdb.telephone}`, "_blank");
  }
}
