/**
 * ***************************************
 * Centro Cristiano de Loja Web
 * @author Jerson Morocho
 * 
 * ---------------------------------------
 * - Creation (10-dec-2019)
 * ---------------------------------------
 */

import { Directive, Renderer2, HostListener, ElementRef, } from '@angular/core';

@Directive({
  selector: "[zoom]"
})
export class SvgZoomDirective {
  zoom = 0;
  state = true;
  
  constructor(private path: ElementRef, private renderer: Renderer2) {}

  @HostListener("click")
  zoomAndPan() {
    let path = this.path.nativeElement;
    const map = this.renderer.parentNode(path);
    let [xMap, yMap] = this.getBoundingBoxCenter(map);
    // let pathName = path.id.split("_");
    let [xPath, yPath] = this.getBoundingBoxCenter(path);

    // zoom dinamico
    this.zoom = this.getZoom(map, path);

    if (this.state) {
      let posX = xMap - this.zoom * xPath;
      let posY = yMap - this.zoom * yPath;
      this.renderer.addClass(path, "active");
      this.renderer.setAttribute(
        map,
        "transform",
        `translate(${posX}, ${posY})scale(${this.zoom})`
      );
    } else {
      this.renderer.removeClass(path, "active");
      this.renderer.removeAttribute(map, "transform");
    }
    this.renderer.setStyle(map, "transition", "transform 750ms");

    // dibujar un marcardor en el centro del path
    this.drawPoint(map, xPath, yPath);

    // coloca el nombre del sector en una variable
    // this.titleSector = sector_name.join(' ');    

    // cambia el estado del path en cada click
    this.state = !this.state;
  }

  private getZoom(map: any, path: any): number {
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
      widthPath: (mapSize.widthGroup * bboxPath.width) / mapSize.width + 50,
      heightPath: (mapSize.heightGroup * bboxPath.height) / mapSize.height + 50
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

  private getBoundingBoxCenter(el: SVGAElement) {
    let bbox = el.getBBox();
    return [bbox.x + bbox.width / 2, bbox.y + bbox.height / 2];
  }

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