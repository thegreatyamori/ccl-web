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
import { NgxSpinnerService } from 'ngx-spinner';
import { PastoresService } from "src/app/services/pastores.service";

import { RootObject as Res, Pastor } from "src/app/models/pastores";
import { Settings } from "src/app/models/config";

@Component({
  selector: "app-cuerpo-pastoral",
  templateUrl: "./cuerpo-pastoral.component.html",
  styleUrls: ["./cuerpo-pastoral.component.scss"]
})
export class CuerpoPastoralComponent implements OnInit {
  status: boolean;
  pastores: Pastor[];
  settings: any;

  constructor(
    private titleDocument: Title,
    private rest: PastoresService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.titleDocument.setTitle("Cuerpo Pastoral");
    this.settings = Settings.cuerpo_pastoral;
    this.spinner.show();
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
      this.spinner.hide();
    });
  }
}
