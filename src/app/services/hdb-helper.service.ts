import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LightHDB, MapState, FilterState, ColorState } from '../models/hdb';
import { HdbService } from './hdb.service';
import { Marker } from '../classes/marker';

@Injectable({
  providedIn: 'root',
})
export class HdbHelperService {
  private renderer: Renderer2;

  // See more info: https://rxjs.dev/api/index/class/BehaviorSubject
  private _hdbs = new BehaviorSubject<LightHDB[]>([]);
  private hdb = new BehaviorSubject<LightHDB>(<LightHDB>{});
  private isCardActive = new BehaviorSubject<boolean>(false);
  private map = new BehaviorSubject<any>({});
  private mapClicked = new BehaviorSubject<MapState>({
    isActive: false,
    place: '',
  });
  private colorState = new BehaviorSubject<ColorState>({
    classMap: 'click',
    classStroke: 'base-stroke',
    classBg: 'base-bg',
  });
  private filterState = new BehaviorSubject<FilterState>({
    title: 'Filtrar',
    type: false,
    day: false,
  });

  hdbs$ = this._hdbs.asObservable();
  hdb$ = this.hdb.asObservable();
  isCardActive$ = this.isCardActive.asObservable();
  mapClicked$ = this.mapClicked.asObservable();
  map$ = this.map.asObservable();
  filterState$ = this.filterState.asObservable();
  colorState$ = this.colorState.asObservable();

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
   * Se suscribe al behaviorSubject setear un hdb
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
   * Se suscribe al behaviorSubject para cambiar
   * la visibilidad del buscaodr
   * @param state contiene el nombre y estado del elemento
   */
  toggleMapClick(state: MapState): void {
    this.mapClicked.next(state);
  }

  /**
   * Se suscribe al behaviorSubject para setear el mapa svg
   * de manera global
   * @param ref contiene el nombre y estado del elemento
   */
  setMap(ref: any): void {
    this.map.next(ref);
  }

  /**
   * Se suscribe al behaviorSubject para setear el estado
   * del filtro
   * @param map contiene el titulo, si es por tipo o por día
   */
  setFilterState(ref: FilterState): void {
    this.filterState.next(ref);
  }

  /**
   * Se suscribe al behaviorSubject para setear el color
   * del mapa|card|title-bar
   * @param colors contiene el color de la tarjeta
   */
  setColorState(colors: ColorState): void {
    this.colorState.next(colors);
  }

  /**
   * Resetea el mapa a un estado determinado
   * @param arg argumento de reseteo
   * Actualmente existen 2:
   * - all
   * - path id
   */
  reset(arg: string): void {
    const mapa = this.map.getValue();

    if (arg === 'all') {
      mapa.childNodes.forEach((el: any) => {
        this.renderer.removeStyle(el, 'fill');
        this.renderer.removeAttribute(el, 'class');

        // elimina los marcadores
        this.undrawPoint(mapa, el);
      });

      this.renderer.removeAttribute(mapa, 'transform');
      this.toggleMapClick({ isActive: false, place: '' });
      this.setColorState({
        classMap: 'click',
        classStroke: 'base-stroke',
        classBg: 'base-bg',
      });
    } else {
      mapa.childNodes.forEach((el: any) => {
        if (el.id !== arg) {
          this.renderer.removeAttribute(el, 'class');

          // elimina los marcadores
          this.undrawPoint(mapa, el);
        }
      });
    }
  }

  /**
   * Manager de estados zoomIn|zoomOut
   * @param path path svg
   * @param state estado del sector
   * @param color2 opcional: el color que se va a pintar cuando el sector este seleccionado
   */
  zoomManager(path: SVGPathElement, state: boolean) {
    // Obtenemos la referencia al elemento g, que contiene a todos paths del mapa
    const map = this.renderer.parentNode(path);
    const filterState = this.filterState.getValue();
    const colorName = filterState.title.toLowerCase();
    let color: ColorState;

    // Eliminamos el estilo fill de todos los paths menos el seleccionado
    this.reset(path.id);

    // seteamos el color segun el tipo de filtro|click
    if (filterState.day || state) {
      color = {
        classMap: 'click',
        classStroke: 'click-stroke',
        classBg: 'click-bg',
      };
    }
    if (filterState.type) {
      color = {
        classMap: colorName,
        classStroke: `${colorName}-stroke`,
        classBg: `${colorName}-bg`,
      };
    }
    if (!state) {
      color = {
        classMap: 'click',
        classStroke: 'base-stroke',
        classBg: 'base-bg',
      };
      if (filterState.type) color.classMap = colorName;
      if (filterState.day) color.classMap = colorName;
    }
    this.setColorState(color);

    if (state) this.zoomIn(map, path, color.classMap);
    else this.zoomOut(map, path, color.classMap);
  }

  /**
   * zoomIn a un path svg en el mapa
   * @param map grupo de paths
   * @param path path svg
   * @param color color a aplicar
   */
  private zoomIn(map: SVGGElement, path: SVGPathElement, color: string): void {
    const zoom = this.getZoomValue(map, path);
    const [xMap, yMap] = this.getBBoxCenter(map);
    const [xPath, yPath] = this.getBBoxCenter(path);

    // coordenada cx donde se posiciona el path
    const posX = xMap - zoom * xPath;

    // coordenada cy donde se posiciona el path
    const posY = yMap - zoom * yPath;

    // translacion del elemento
    const translate = `translate(${posX}, ${posY})scale(${zoom})`;

    this.renderer.addClass(path, color);
    this.renderer.addClass(path, 'active');
    this.renderer.setAttribute(map, 'transform', translate);
    this.renderer.setStyle(map, 'transition', 'transform 750ms');

    // Enviamos el estado y el lugar para decirle al componente
    // ListaHDB que se active
    this.toggleMapClick({
      isActive: true,
      place: path.id,
    });

    // colocamos los marcadores
    this.serMarkers(map, path.id);

    // TODO: quitar una vez esten las pruebas
    console.log('Marker: ', xPath, yPath);
  }

  /**
   * zoomOut a un path svg en el mapa
   * @param map grupo de paths
   * @param path path svg
   * @param color color a aplicar
   */
  zoomOut(map: SVGGElement, path: SVGPathElement, color: string): void {
    this.renderer.removeClass(path, color);
    this.renderer.removeClass(path, 'active');
    this.renderer.removeAttribute(map, 'transform');
    this.renderer.setStyle(map, 'transition', 'transform 750ms');

    // Enviamos el estado y el lugar para decirle al componente
    // ListaHDB que se desactive
    this.toggleMapClick({ isActive: false, place: '' });
  }

  /**
   * Obtiene un valor de zoom en funcion del tamaño del elemento
   * @param map svg
   * @param path svg
   * @returns el valor del zoom
   */
  private getZoomValue(map: SVGGElement, path: SVGPathElement): number {
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
   * @returns un array [cx, cy]
   */
  private getBBoxCenter(el: SVGGraphicsElement): [number, number] {
    let { x, y, width, height } = el.getBBox();
    return [x + width / 2, y + height / 2];
  }

  /**
   * Coloca los marcadores en el mapa
   * @param place id del sector
   */
  serMarkers(map: SVGGElement, place: string): void {
    const hdbs = this._hdbs.getValue();
    const filterBy = this.filterState.getValue();
    const title = filterBy.title.toLowerCase();

    hdbs.forEach((item) => {
      if (item.place === place) {
        if (title === 'filtrar') {
          // Si el sector coincide
          this.drawPoint(map, item.posX, item.posY);
        } else if (title === item.typeHDB) {
          // Si el filtro por tipo coinciden
          this.drawPoint(map, item.posX, item.posY);
        } else if (title === item.day) {
          // Si el filtro por dia coinciden
          this.drawPoint(map, item.posX, item.posY);
        }
      }
    });
  }

  /**
   * Dibuja un punto dentro de un svg
   * @param svg elemento svg
   * @param x centro en x
   * @param y centro en y
   */
  private drawPoint(svg: SVGGElement, x: number, y: number): void {
    const m = new Marker(x, y, 0.05);
    const marker = m.add();
    this.renderer.appendChild(svg, marker);

    // TODO: quitar una vez esten las pruebas
    console.log('Marker: ', x, y);
  }

  /**
   * Dibuja un punto dentro de un svg
   * @param svg elemento svg
   * @param x centro en x
   * @param y centro en y
   */
  private undrawPoint(svg: SVGGElement, path: SVGPathElement): void {
    if (path.id === 'marker') {
      this.renderer.removeChild(svg, path);
    }
  }
}
