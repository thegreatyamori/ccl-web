/**
 * ***************************************
 * Centro Cristiano de Loja Web
 * @author Jerson Morocho
 *
 * ---------------------------------------
 * - Creation (19-ene-2020)
 * ---------------------------------------
 */

import { Component, OnInit } from "@angular/core";
import { Settings } from 'src/config/config';

@Component({
  selector: "app-pastores",
  templateUrl: "./pastores.component.html",
  styleUrls: ["./pastores.component.scss"]
})
export class PastoresComponent implements OnInit {
  settings: any;

  constructor() {}

  ngOnInit() {
    this.settings = Settings.pastores;
  }
}
