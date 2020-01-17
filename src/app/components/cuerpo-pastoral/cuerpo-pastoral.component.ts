/**
 * ***************************************
 * Centro Cristiano de Loja Web
 * @author Jerson Morocho
 * 
 * ---------------------------------------
 * - Creation (17-ene-2020)
 * - Added Title Document ((17-ene-2020)
 * ---------------------------------------
 */

import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cuerpo-pastoral',
  templateUrl: './cuerpo-pastoral.component.html',
  styleUrls: ['./cuerpo-pastoral.component.scss']
})
export class CuerpoPastoralComponent implements OnInit {

  constructor(private titleDocument: Title) { }

  ngOnInit() {
    this.titleDocument.setTitle("Cuerpo Pastoral");
  }

}
