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
import * as Rellax from "rellax";
import { HdbService } from 'src/app/services/hdb.service';
import { LightHDB } from "src/app/models/hdb";

@Component({
  selector: "app-conectate",
  templateUrl: "./conectate.component.html",
  styleUrls: ["./conectate.component.scss"]
})
export class ConectateComponent implements OnInit {
  titleSector: string = "haz click en cualquier parte del mapa";
  filterHDB: string = "";
  isCardActive: boolean = false;
  isSearchActive: boolean = true;
  status: boolean;
  phone: string = "";
  telephone: string = "";
  hdb: LightHDB;
  hdbs: LightHDB[];
  

  constructor(private titleDocument: Title, private rest: HdbService) {}

  ngOnInit() {
    this.titleDocument.setTitle("Conéctate");
    let rellax = new Rellax(".rellax");
    this.getAllHDBs();
  }

  getAllHDBs() {
    this.rest.getAll().subscribe((data: LightHDB[]) => {
      this.hdbs = data;
      console.log(data);
    });
  }

  private showCard(hdbItem: LightHDB) {
    let phone = hdbItem.telephone.toString();
    let telephone = hdbItem.alternative !== null ?
      hdbItem.alternative.toString() : '';

    // Asignamos un tipo de numero de telefono
    this.phone = phone.length === 9 ? 'movil' : 'convencional';
    this.telephone = telephone.length === 7 ? 'convencional' : 'movil';

    this.hdb = hdbItem;
    this.isCardActive = true;
    this.isSearchActive = false;
  }

  private closeCard() {
    this.hdb = <LightHDB>{};
    this.isCardActive = false;
    this.isSearchActive = true;
  }

  private openWhatsapp(number: string) {
    window.open(`https://wa.me/593${number}`, "_blank");
  }
}
