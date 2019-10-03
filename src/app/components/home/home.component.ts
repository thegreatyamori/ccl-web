import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public navImage;
  public navCalendarImage;
  public navDonationsImage;
  public navHDBImage;
  public textCaledar: String;
  public textDonations: String;
  public textHDB: String;

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
