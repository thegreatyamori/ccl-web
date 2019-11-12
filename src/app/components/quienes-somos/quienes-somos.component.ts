/**
 * ***************************************
 * Centro Cristiano de Loja Web
 * @author Jerson Morocho
 *
 * ---------------------------------------
 * - Creation (8-nov-2019)
 * - Added service, titleDocument (9-nov-2019)
 * - Modified onTabChange (11-nov-2019)
 * ---------------------------------------
 */

import { Component, OnInit } from "@angular/core";
import { NgbTabChangeEvent } from "@ng-bootstrap/ng-bootstrap";
import { Title } from "@angular/platform-browser";
import * as Rellax from "rellax";

import { RootObject as Page } from "src/app/models/quienesSomos";
import { QuienesSomosService } from "src/app/services/quienes-somos.service";

@Component({
  selector: "app-quienes-somos",
  templateUrl: "./quienes-somos.component.html",
  styleUrls: ["./quienes-somos.component.scss"]
})
export class QuienesSomosComponent implements OnInit {
  title: string = "Reseña Histórica";
  page: Page;

  constructor(
    private rest: QuienesSomosService,
    private titleDocument: Title
  ) {}

  ngOnInit() {
    let rellax = new Rellax(".rellax");
    this.titleDocument.setTitle(this.title);
    this.getPage();
  }

  getPage() {
    this.rest.getPage().subscribe((data: Page) => {
      this.page = data;
    },
    err => console.error(err));
  }

  onTabChange(event: NgbTabChangeEvent) {
    let tab = this.page.res.find(tab => tab.id === Number(event.nextId));

    this.title = tab.title;
    this.titleDocument.setTitle(this.title);
  }
}
