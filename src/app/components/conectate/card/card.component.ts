/**
 * ***************************************
 * Centro Cristiano de Loja Web
 * @author Jerson Morocho
 *
 * ---------------------------------------
 * - Creation (12-feb-2020)
 * ---------------------------------------
 */

import { Component, OnInit, Input, Inject } from "@angular/core";
import { HdbHelperService } from "src/app/services/hdb-helper.service";
import { LightHDB } from "src/app/models/hdb";
import { WINDOW } from "src/app/services/window.service";
import { DeviceDetectorService } from "ngx-device-detector";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"]
})
export class CardComponent implements OnInit {
  phone: string;
  telephone: string;
  isActive: boolean;
  isDesktop: boolean;
  data: LightHDB;

  constructor(
    private helper: HdbHelperService,
    private deviceService: DeviceDetectorService,
    @Inject(WINDOW) private window: Window
  ) {}

  ngOnInit(): void {
    this.phone = "";
    this.telephone = "";
    this.isDesktop = this.deviceService.isDesktop();
    this.getData();
  }

  /**
   * Verifica si se esta navegando desde un pc
   */
  isDevice(): boolean {
    return this.isActive && this.isDesktop;
  }

  /**
   * Obtiene la referencia a un itemHdb de tipo lightHDB
   */
  getData(): void {
    this.helper.hdb$.subscribe((data: LightHDB) => (this.data = data));

    // cambiamos la visibiladad de la tarjeta
    this.helper.isCardActive$.subscribe(
      (state: boolean) => (this.isActive = state)
    );
  }

  /**
   * Cierra la tarjeta y resetea el contenido
   * @param ref TemplateRef
   */
  close(): void {
    this.helper.changeVisibility(false);
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
