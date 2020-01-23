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

import { Component, OnInit, Renderer2 } from "@angular/core";
import { Title } from "@angular/platform-browser";
import {
  trigger,
  style,
  animate,
  transition,
  keyframes
} from "@angular/animations";
import * as Rellax from "rellax";
import { HdbService } from "src/app/services/hdb.service";
import { LightHDB } from "src/app/models/hdb";

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
  titleSector: string = "haz click en cualquier parte del mapa";
  filterHDB: string = "";
  isCardActive: boolean = false;
  isPathActive: boolean = true;
  phone: string = "";
  telephone: string = "";
  hdb: LightHDB;
  hdbs: LightHDB[];
  page = 1;
  itemsPerPage: number = 6;
  previousPage: number;
  zoom = 0;

  constructor(
    private titleDocument: Title,
    private rest: HdbService,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.titleDocument.setTitle("Conéctate");
    let rellax = new Rellax(".rellax");
    this.getAllHDBs();
  }

  /**
   * Retorna todos los hogares de bendicion de tipo LightHDB
   * */
  getAllHDBs() {
    this.rest.getAll().subscribe((data: LightHDB[]) => {
      this.hdbs = data;
      // console.log(data);
    });
  }

  /**
   * Muestra el contenido de un hogar de bendición formateado en una tarjeta
   * @param hdbItem
   */
  showCard(ref: any, hdbItem: LightHDB) {
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
    this.zoomPath(path, pathName, true, hdbItem.color);
  }

  /**
   * Cierra la tarjeta y resetea el contenido
   */
  closeCard(ref: any, _pathName: string) {
    let path = ref.children[_pathName];

    this.hdb = <LightHDB>{};
    this.isCardActive = false;
    this.zoomPath(path, "haz click en cualquier parte del mapa", false);
  }

  /**
   * Abre whatsapp de acuerdo al primer numero indicado
   */
  openWhatsapp(number: string) {
    window.open(`https://wa.me/593${number}`, "_blank");
  }

  clickToZoom(evt: { target: any }) {
    let path = evt.target;
    let _pathName = path.id.split("_");
    let pathName = _pathName.join(" ");

    this.zoomPath(path, pathName, true, "orange");
  }

  /**
   * Realiza el zoom dinamico
   * @param path path svg
   * @param pathName nombre del sector
   * @param state estado del sector
   */
  zoomPath(path: any, pathName: string, state: boolean, color?: string) {
    let map = path.parentNode;
    // console.log(map);

    let [xMap, yMap] = this.getBoundingBoxCenter(map);
    let [xPath, yPath] = this.getBoundingBoxCenter(path);

    // zoom dinamico
    this.zoom = this.getPathZoomValue(map, path);

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
   * @param map
   * @param path
   */
  private getPathZoomValue(map: SVGAElement, path: SVGAElement): number {
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
  private getBoundingBoxCenter(el: SVGAElement) {
    let bbox = el.getBBox();
    return [bbox.x + bbox.width / 2, bbox.y + bbox.height / 2];
  }

  /**
   * Dibuja un punto dentro de un svg
   * @param svg elemento svg
   * @param cx centro en x
   * @param cy centro en y
   */
  private drawPoint(svg: SVGAElement, cx: number, cy: number) {
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
}
