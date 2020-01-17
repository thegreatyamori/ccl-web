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
  navCalendarImage: string;
  navDonationsImage: string;
  navHDBImage: string;
  textCaledar: string;
  textDonations: string;
  textMisions: string;

  constructor() {}

  ngOnInit() {
    this.navImage = "assets/img/home/bg-buttons-bar.svg";
    this.navCalendarImage = "assets/img/home/card-calendar.jpg";
    this.navDonationsImage = "assets/img/home/card-hdb.jpg";
    this.navHDBImage = "assets/img/home/card-donations.jpg";
    this.textCaledar = "Calendario";
    this.textDonations = "Donaciones";
    this.textMisions = "Misiones";
  }
}
