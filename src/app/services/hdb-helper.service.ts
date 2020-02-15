import { Injectable, Renderer2, RendererFactory2 } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { LightHDB } from "../models/hdb";
import { HdbService } from "./hdb.service";

@Injectable({
  providedIn: "root"
})
export class HdbHelperService {
  private renderer: Renderer2;

  // See more info: https://rxjs.dev/api/index/class/BehaviorSubject
  private _hdbs = new BehaviorSubject<LightHDB[]>([]);
  private hdb = new BehaviorSubject<LightHDB>(<LightHDB>{});
  private isCardActive = new BehaviorSubject<boolean>(false);

  hdbs$ = this._hdbs.asObservable();
  hdb$ = this.hdb.asObservable();
  isCardActive$ = this.isCardActive.asObservable();

  constructor(private rest: HdbService, rendererFactory: RendererFactory2) {
    /**
     * You cannot inject , but we can run to get instance inside service.
     * There is the way which Angular using internally in webworkers,
     * for example.Renderer2RendererFactory2Renderer2@Injectable().
     * more info: https://stackoverflow.com/questions/43070308/using-renderer-in-angular-4/43140852#43140852
     */
    this.renderer = rendererFactory.createRenderer(null, null);

    this.getData();
  }

  /**
   * Retorna todos los hogares de bendicion de tipo LightHDB
   */
  getData(): void {
    this.rest.getAll().subscribe((data: LightHDB[]) => this._hdbs.next(data));
  }

  /**
   * Se suscribe al behaviorSubject para obtener un hdb
   * @param item objeto hdb
   */
  setItem(item: LightHDB): void {
    this.hdb.next(item);
  }

  /**
   * Se suscribe al behaviorSubject para cambiar
   * la visibilidad del buscaodr
   * @param isVisible switch
   */
  changeVisibility(isVisible: boolean): void {
    this.isCardActive.next(isVisible);
  }

  /**
   * Permite hacer zoom a un path svg en el mapa
   * @param path path svg
   * @param state estado del sector
   * @param color opcional: el color que se va a pintar cuando el sector este seleccionado
   */
  zoom(path: SVGAElement, state: boolean, color: string) {
    // Obtenemos la referencia al elemento g, que contiene a todos paths del mapa
    const map = this.renderer.parentNode(path);

    // Coordenadas cx,cy del mapa
    const [xMap, yMap] = this.getBBoxCenter(map);

    // Coordenadas cx,cy del path
    const [xPath, yPath] = this.getBBoxCenter(path);

    // obtenemos el valor del zoom para el path clickeado
    let zoom = this.getZoomValue(map, path);

    // state == true aplica el zoom
    if (state) {
      // coordenada cx donde se posiciona el path
      const posX = xMap - zoom * xPath;

      // coordenada cy donde se posiciona el path
      const posY = yMap - zoom * yPath;

      // translacion del elemento
      const translate = `translate(${posX}, ${posY})scale(${zoom})`;

      this.renderer.addClass(path, color);
      this.renderer.addClass(path, "active");
      this.renderer.setAttribute(map, "transform", translate);
    } else {
      this.renderer.removeClass(path, color);
      this.renderer.removeClass(path, "active");
      this.renderer.removeAttribute(map, "transform");
    }

    this.renderer.setStyle(map, "transition", "transform 750ms");
  }

  /**
   * Obtiene un valor de zoom en funcion del tamaño del elemento
   * @param map svg
   * @param path svg
   */
  private getZoomValue(map: SVGAElement, path: SVGAElement): number {
    // factor de margen
    const k = 50;

    const { width: wMapRect, height: hMapRect } = map.getBoundingClientRect();

    // Bounding box del mapa
    const { width: wMap, height: hMap } = map.getBBox();

    // Bounding box del path
    const { width: wPath, height: hPath } = path.getBBox();

    const rX = (wMapRect * wPath) / wMap + k;
    const rY = (hMapRect * hPath) / hMap + k;

    // valor del zoom
    let zoom = 0;

    if (wPath > hPath) {
      zoom = wMapRect / rX;
      if (zoom * rY > hMapRect) {
        zoom = hMapRect / rY;
      }
    } else {
      zoom = hMapRect / rY;
      if (zoom * rX > wMapRect) {
        zoom = wMapRect / rX;
      }
    }

    return zoom;
  }

  /**
   * Obtiene el centro de un elemento svg
   * @param el svg element
   */
  private getBBoxCenter(el: SVGAElement): [number, number] {
    let { x, y, width, height } = el.getBBox();
    return [x + width / 2, y + height / 2];
  }
}
