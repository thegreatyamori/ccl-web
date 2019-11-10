/**
 * ***************************************
 * Centro Cristiano de Loja Web
 * @author Jerson Morocho
 * 
 * ---------------------------------------
 * - Creation (8-nov-2019)
 * - Added service (9-nov-2019)
 * ---------------------------------------
 */

import { Component, OnInit } from '@angular/core';
import { NgbTabChangeEvent } from "@ng-bootstrap/ng-bootstrap";
import * as Rellax from "rellax";

import { RootObject as Page } from "src/app/models/quienesSomos";
import { QuienesSomosService } from 'src/app/services/quienes-somos.service';

@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.component.html',
  styleUrls: ['./quienes-somos.component.scss']
})
export class QuienesSomosComponent implements OnInit {
  title: string = 'Reseña Histórica';
  page: Page;

  constructor(private rest: QuienesSomosService) { }

  ngOnInit() {
    let rellax = new Rellax('.rellax');
    this.getPage();
  }
  
  getPage() {
    this.rest.getPage().subscribe((data: Page) => {
      this.page = data;
    }, err => console.error(err));
  }

  onTabChange(event: NgbTabChangeEvent) {
    let [tab1, tab2, tab3, tab4] = this.page.tabs;
    switch (event.nextId) {
      case '0':
        this.title = tab1.title
        break;
      case '1':
        this.title = tab2.title
        break;
      case '2':
        this.title = tab3.title
        break;
      case '3':
        this.title = tab4.title
        break;
    }
  }
}
