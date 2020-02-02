import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Settings } from 'src/app/models/config';

@Component({
  selector: "app-campos-blancos",
  templateUrl: "./campos-blancos.component.html",
  styleUrls: ["./campos-blancos.component.scss"]
})
export class CamposBlancosComponent implements OnInit {
  constructor(private titleDocument: Title) {}

  ngOnInit() {
    let [misiones, transculturales, filiales, camposBlancos] = Settings.misiones.cards;
    this.titleDocument.setTitle(`${misiones.title} ${camposBlancos.title}`);
  }
}
