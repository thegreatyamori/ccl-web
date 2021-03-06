/**
 * ***************************************
 * Centro Cristiano de Loja Web
 * @author Jerson Morocho
 *
 * ---------------------------------------
 * - Creation (28-sep-2019)
 * - Added Title Document (9-nov-2019)
 * ---------------------------------------
 */

import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent implements OnInit {
  title: string;

  constructor(private titleDocument: Title) {}

  ngOnInit() {
    this.title = 'Centro Cristiano de Loja';
    this.titleDocument.setTitle(this.title);
  }
}
