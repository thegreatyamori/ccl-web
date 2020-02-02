import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Settings } from "src/app/models/config";

@Component({
  selector: "app-misiones",
  templateUrl: "./misiones.component.html",
  styleUrls: ["./misiones.component.scss"]
})
export class MisionesComponent implements OnInit {
  cards: any;

  constructor(private titleDocument: Title) {}

  ngOnInit() {
    this.cards = Settings.misiones.cards;
    let [ misiones, ...any ] = this.cards;
    this.titleDocument.setTitle(misiones.title);
  }
}
