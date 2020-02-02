import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Settings } from 'src/app/models/config';

@Component({
  selector: "app-transculturales",
  templateUrl: "./transculturales.component.html",
  styleUrls: ["./transculturales.component.scss"]
})
export class TransculturalesComponent implements OnInit {
  constructor(private titleDocument: Title) {}

  ngOnInit() {
    let [misiones, transculturales, ...any] = Settings.misiones.cards;
    this.titleDocument.setTitle(`${misiones.title} ${transculturales.title}`);
  }
}
