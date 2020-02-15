/**
 * ***************************************
 * Centro Cristiano de Loja Web
 * @author Jerson Morocho
 *
 * ---------------------------------------
 * - Creation (29-sep-2019)
 * - Added Title Document (9-nov-2019)
 * - Added Search Support (14-dec-2019)
 * - Refactorized code (16-feb-2019)
 * ---------------------------------------
 */

import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Settings } from "src/config/config";

@Component({
  selector: "app-conectate",
  templateUrl: "./conectate.component.html",
  styleUrls: ["./conectate.component.scss"]
})
export class ConectateComponent implements OnInit {
  settings: any;

  constructor(private titleDocument: Title) {}

  ngOnInit() {
    this.titleDocument.setTitle("Conéctate");
    this.settings = {
      title: Settings.conectate.title,
      bg_image: Settings.conectate.bg_image,
      logo_title: Settings.conectate.logo_title
    };
  }

  /**
   * Dibuja un punto dentro de un svg
   * @param svg elemento svg
   * @param x centro en x
   * @param y centro en y
   */
  private drawPoint(svg: SVGAElement, x: number, y: number): void {
    var circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    circle.setAttribute("style", "stroke:transparent; fill:green");
    circle.setAttribute("r", "1");
    circle.setAttribute("cx", `${x}`);
    circle.setAttribute("cy", `${y}`);

    svg.appendChild(circle);
  }
}
