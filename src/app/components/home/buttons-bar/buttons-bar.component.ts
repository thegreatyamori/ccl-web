/**
 * ***************************************
 * Centro Cristiano de Loja Web
 * @author Jerson Morocho
 * 
 * ---------------------------------------
 * - Creation (6-oct-2019)
 * - Modified textHDB to textMisions (3-ene-2020)
 * ---------------------------------------
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-buttons-bar",
  templateUrl: "./buttons-bar.component.html",
  styleUrls: ["./buttons-bar.component.scss"]
})
export class ButtonsBarComponent implements OnInit {
  navImage: string;
  buttons: any;

  constructor() {}

  ngOnInit() {
    this.navImage = "assets/img/home/bg-buttons-bar.svg";
    this.buttons = [
    {
      navLink: "/actividades",
      navImage: "assets/img/home/card-calendar.jpg",
      navText: "Calendario",
      navIcon: "calendar-alt"
    },
    {
      navLink: "/donaciones",
      navImage: "assets/img/home/card-hdb.jpg",
      navText: "Donaciones",
      navIcon: "bible"
    },
    {
      navLink: "/misiones",
      navImage: "assets/img/home/card-donations.jpg",
      navText: "Misiones",
      navIcon: "globe-americas"
    }
  ];
  }
}
