/**
 * ***************************************
 * Centro Cristiano de Loja Web
 * @author Jerson Morocho
 * 
 * ---------------------------------------
 * - Creation (19-ene-2020)
 * ---------------------------------------
 */


import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-pastores",
  templateUrl: "./pastores.component.html",
  styleUrls: ["./pastores.component.scss"]
})
export class PastoresComponent implements OnInit {
  settings: any;

  constructor() {}

  ngOnInit() {
    this.settings = {
      bgPastores: "assets/img/home/bg-pablo-y-patricia.jpg",
      bgPastoresText: "assets/img/home/bg-buttons-bar.svg",
    }
  }
}
