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
  ViewEncapsulation,
  OnDestroy,
  ElementRef,
  Renderer2,
  Inject
} from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { WINDOW } from "src/app/services/window.service";
import { HdbHelperService } from "src/app/services/hdb-helper.service";
import { LightHDB } from "src/app/models/hdb";
import { DeviceDetectorService } from "ngx-device-detector";

@Component({
  selector: "app-card-v2",
  templateUrl: "./card-v2.component.html",
  styleUrls: ["./card-v2.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class CardV2Component implements OnInit, OnDestroy {
  phone: string;
  telephone: string;
  isActive: boolean;
  isMobile: boolean;
  isTablet: boolean;
  data: LightHDB;

  private swipeCoord?: [number, number];
  private swipeTime?: number;
  private swipeCard: number = 0;

  // Variables de control para el modal
  private element: any;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window,
    private deviceService: DeviceDetectorService,
    private helper: HdbHelperService,
    private renderer: Renderer2,
    private el: ElementRef
  ) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    // move element to bottom of page (just before </body>)
    //  so it can be displayed above everything else
    this.renderer.appendChild(this.document.body, this.element);

    // close modal on background click
    this.renderer.listen(this.element, "click", el => {
      const classes: string = el.target.className;
      if (classes.includes("bt-background")) this.close();
    });

    // Variables usadas para leer el hdb
    this.phone = "";
    this.telephone = "";

    // variables para detectar si el navegador es movil, tablet o pc
    this.isMobile = this.deviceService.isMobile();
    this.isTablet = this.deviceService.isTablet();

    this.getData();
  }

  // remove self from modal service when component is destroyed
  ngOnDestroy(): void {
    this.renderer.removeChild(this.document.body, this.element);
  }

  /**
   * Verifica si se esta navegando desde una tablet o un movil
   */
  isDevice(): boolean {
    return this.isActive && (this.isMobile || this.isTablet);
  }

  /**
   * open modal
   */
  open(): void {
    this.renderer.setStyle(this.element, "display", "block");
    this.renderer.addClass(this.document.body, "bt-open");
  }

  /**
   * close modal
   */
  close(): void {
    this.renderer.setStyle(this.element, "display", "none");
    this.renderer.removeClass(this.document.body, "bt-open");

    // cambiamos la visibilidad de la tarjeta
    this.helper.changeVisibility(false);
  }

  /**
   * Funcion para detectar el evt swipeDown y cerrar la tarjeta
   */
  swipe(e: TouchEvent): void {
    const [coordX, coordY]: [number, number] = [
      e.changedTouches[0].clientX,
      e.changedTouches[0].clientY
    ];
    const time = new Date().getTime();

    if (e.type === "touchstart") {
      this.swipeCoord = [coordX, coordY];
      this.swipeTime = time;
    } else if (e.type === "touchend") {
      const [horizontal, vertical] = [
        coordX - this.swipeCoord[0],
        coordY - this.swipeCoord[1]
      ];
      const duration = time - this.swipeTime;

      if (duration < 500) {
        // swipe vertical
        if (Math.abs(vertical) > 60) {
          const swipeV = vertical < 0 ? "up" : "down";
          if (swipeV === "down") {
            this.close();
          }
        }

        // swipe horizontal
        if (Math.abs(horizontal) > 60) {
          const swipeH = horizontal < 0 ? "left" : "right";
          // console.log(swipeH);
        }
      }
    }
  }

  /**
   * Obtiene la referencia a un itemHdb de tipo lightHDB
   */
  getData() {
    this.helper.hdb$.subscribe((data: LightHDB) => (this.data = data));

    // cambiamos la visibiladad de la tarjeta
    this.helper.isCardActive$.subscribe(
      (state: boolean) => (this.isActive = state)
    );
  }

  /**
   * valida si un numero es movil o convencional
   * @returns movil o convencional
   */
  phoneType(phone: number): string {
    const telephone = phone !== null ? String(phone).length : "";

    if (telephone === 9) return "movil";
    if (telephone === 7) return "convencional";
  }

  /**
   * valida si un numero tiene whatsApp
   * @returns un valor boleano
   */
  validateWhatsPhone(): boolean {
    return String(this.data.telephone).length === 9;
  }

  /**
   * Abre whatsapp de acuerdo al primer numero indicado
   */
  openWhatsapp(): void {
    this.window.open(`https://wa.me/593${this.data.telephone}`, "_blank");
  }
}
