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
}
