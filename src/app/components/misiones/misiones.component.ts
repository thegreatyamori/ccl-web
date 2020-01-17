import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";


@Component({
  selector: "app-misiones",
  templateUrl: "./misiones.component.html",
  styleUrls: ["./misiones.component.scss"]
})
export class MisionesComponent implements OnInit {
  constructor(private titleDocument: Title) {}

  ngOnInit() {
    this.titleDocument.setTitle("Misiones");
  }
}
