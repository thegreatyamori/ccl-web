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

import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import {
  trigger,
  state,
  style,
  animate,
  transition
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
        // :leave is alias to '* => void'
        animate(
          500,
          style({
            opacity: 0,
            transform: "translate3d(100%, 0, 0)"
          })
        )
      ])
    ])
  ]
})
export class ConectateComponent implements OnInit {
  titleSector: string = "haz click en cualquier parte del mapa";
  filterHDB: string = "";
  isCardActive: boolean = false;
  phone: string = "";
  telephone: string = "";
  hdb: LightHDB;
  hdbs: LightHDB[];
  page = 1;
  itemsPerPage: number = 6;
  previousPage: number;

  constructor(private titleDocument: Title, private rest: HdbService) {}

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
  private showCard(hdbItem: LightHDB) {
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
  }

  /**
   * Cierra la tarjeta y resetea el contenido
   */
  private closeCard() {
    this.hdb = <LightHDB>{};
    this.isCardActive = false;
  }

  /**
   * Abre whatsapp de acuerdo al primer numero indicado
   */
  private openWhatsapp(number: string) {
    window.open(`https://wa.me/593${number}`, "_blank");
  }
}
