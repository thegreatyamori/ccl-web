/**
 * ***************************************
 * Centro Cristiano de Loja Web
 * @author Jerson Morocho
 *
 * ---------------------------------------
 * - Creation (17-ene-2020)
 * - Added Title Document ((17-ene-2020)
 * ---------------------------------------
 */

import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";

import { PastoresService } from "src/app/services/pastores.service";
import { RootObject as Res, Pastor } from "src/app/models/pastores";

@Component({
  selector: "app-cuerpo-pastoral",
  templateUrl: "./cuerpo-pastoral.component.html",
  styleUrls: ["./cuerpo-pastoral.component.scss"]
})
export class CuerpoPastoralComponent implements OnInit {
  status: boolean;
  pastores: Pastor[];
  settings: any;

  constructor(private titleDocument: Title, private rest: PastoresService) {}

  ngOnInit() {
    this.titleDocument.setTitle("Cuerpo Pastoral");
    this.settings = {
      title: "Cuerpo Pastoral",
      bg_image: "assets/img/quienes-somos/header.jpg",
      logo_title: "assets/img/logo_cropped.png"
    };
    this.getPastores();
  }

  /**
   * Se suscribe al servicio PastoresService para obtener
   * la lista de pastores
   */
  getPastores(): void {
    this.rest.getPastores().subscribe((data: Res) => {
      this.status = data.status;
      this.pastores = data.res;
    });
  }
}
