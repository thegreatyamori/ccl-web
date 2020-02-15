/**
 * ***************************************
 * Centro Cristiano de Loja Web
 * @author Jerson Morocho
 *
 * ---------------------------------------
 * - Creation (10-oct-2019)
 * ---------------------------------------
 */

import { Component, OnInit } from "@angular/core";
import { Settings } from 'src/config/config';

@Component({
  selector: "app-tow-dah",
  templateUrl: "./tow-dah.component.html",
  styleUrls: ["./tow-dah.component.scss"]
})
export class TowDahComponent implements OnInit {
  settings: any;

  constructor() {}

  ngOnInit() {
    this.settings = Settings.towdah;
  }
}
