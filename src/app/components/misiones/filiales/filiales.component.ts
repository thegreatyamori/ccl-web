import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Settings } from 'src/app/models/config';

@Component({
  selector: "app-filiales",
  templateUrl: "./filiales.component.html",
  styleUrls: ["./filiales.component.scss"]
})
export class FilialesComponent implements OnInit {
  constructor(private titleDocument: Title) {}

  ngOnInit() {
    let [misiones, transculturales, filiales, ...any] = Settings.misiones.cards;
    this.titleDocument.setTitle(`${misiones.title} ${filiales.title}`);
  }
}
