/**
 * ***************************************
 * Centro Cristiano de Loja Web
 * @author Jerson Morocho
 * 
 * ---------------------------------------
 * - Creation (6-oct-2019)
 * ---------------------------------------
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons-bar',
  templateUrl: './buttons-bar.component.html',
  styleUrls: ['./buttons-bar.component.scss']
})
export class ButtonsBarComponent implements OnInit {
  navImage: string;
  navCalendarImage: string;
  navDonationsImage: string;
  navHDBImage: string;
  textCaledar: string;
  textDonations: string;
  textHDB: string;

  constructor() { }

  ngOnInit() {
    this.navImage = 'assets/img/home/bg-buttons-bar.svg'
    this.navCalendarImage = 'assets/img/home/card-calendar.jpg'
    this.navDonationsImage = 'assets/img/home/card-donations.jpg'
    this.navHDBImage = 'assets/img/home/card-hdb.jpg'
    this.textCaledar = 'Calendario'
    this.textDonations = 'Donaciones'
    this.textHDB = 'Hogares de Bendición'
  }
}
