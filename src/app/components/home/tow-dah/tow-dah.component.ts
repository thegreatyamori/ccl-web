/**
 * ***************************************
 * Centro Cristiano de Loja Web
 * @author Jerson Morocho
 * 
 * ---------------------------------------
 * - Creation (10-oct-2019)
 * ---------------------------------------
 */

import { Component, OnInit } from '@angular/core';
import * as Rellax from 'rellax';

@Component({
  selector: 'app-tow-dah',
  templateUrl: './tow-dah.component.html',
  styleUrls: ['./tow-dah.component.scss']
})
export class TowDahComponent implements OnInit {
  
  constructor() { }
  
  ngOnInit() {
    var rellax = new Rellax('.rellax');
  }
}