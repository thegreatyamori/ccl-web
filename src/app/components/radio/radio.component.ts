/**
 * ***************************************
 * Centro Cristiano de Loja Web
 * @author Jerson Morocho
 *
 * ---------------------------------------
 * - Creation (29-sep-2019)
 * - Added Title Document (9-nov-2019)
 * - Added radio stream (22-ene-2020)
 * ---------------------------------------
 */

import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-radio",
  templateUrl: "./radio.component.html",
  styleUrls: ["./radio.component.scss"]
})
export class RadioComponent implements OnInit {
  settings: any;

  constructor(private titleDocument: Title) {}

  ngOnInit() {
    this.titleDocument.setTitle("CCL Radio");
    this.settings = {
      bg_image: "assets/img/bg4.jpg"
    };
  }
}
