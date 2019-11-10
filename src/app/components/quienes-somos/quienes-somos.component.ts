/**
 * ***************************************
 * Centro Cristiano de Loja Web
 * @author Jerson Morocho
 * 
 * ---------------------------------------
 * - Creation (8-nov-2019)
 * - Added service, titleDocument (9-nov-2019)
 * ---------------------------------------
 */

import { Component, OnInit } from '@angular/core';
import { NgbTabChangeEvent } from "@ng-bootstrap/ng-bootstrap";
import { Title } from '@angular/platform-browser';
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
  paragraph_1: string[];
  paragraph_2: string[];
  paragraph_3: string[];
  paragraph_4: string[];
  paragraph_5: string[];
  

  constructor(private rest: QuienesSomosService, private titleDocument: Title) { }

  ngOnInit() {
    let rellax = new Rellax('.rellax');
    this.titleDocument.setTitle(this.title);
    this.getPage();
  }
  
  getPage() {
    this.rest.getPage().subscribe((data: Page) => {
      this.page = data;
      this.paragraph_1 = this.page.tabs[0].paragraph_1.split('\n');
      this.paragraph_2 = this.page.tabs[0].paragraph_2.split('\n');
      this.paragraph_3 = this.page.tabs[0].paragraph_3.split('\n');
      this.paragraph_4 = this.page.tabs[0].paragraph_4.split('\n');
      this.paragraph_5 = this.page.tabs[0].paragraph_5.split('\n');
    }, err => console.error(err));
  }

  onTabChange(event: NgbTabChangeEvent) {
    let [tab1, tab2, tab3, tab4, tab5] = this.page.tabs;
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
      case '4':
        this.title = tab5.title
        break;
    }
    this.titleDocument.setTitle(this.title);
  }
}
