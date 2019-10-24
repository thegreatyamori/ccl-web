import { Component, OnInit } from '@angular/core';
import * as Rellax from 'rellax';
import { HeroSliderService } from 'src/app/services/hero-slider.service';

@Component({
  selector: 'app-hero-slider',
  templateUrl: './hero-slider.component.html',
  styleUrls: ['./hero-slider.component.scss']
})

export class HeroSliderComponent implements OnInit {
  slides: any = [{
    "title": 'Tow Dah',
    "subtitle": 'Nature, United States',
    "image": 'assets/img/home/bg1.jpg',
  }, {
    "title": 'Horario de Reuniones',
    "subtitle": 'Nature, United States',
    "image": 'assets/img/home/bg3.jpg',
    "link": '/',
  }, {
    "title": 'Miranos en Vivo',
    "subtitle": 'Nature, United States',
    "image": 'assets/img/home/bg4.jpg',
    "link": '/',
  }];

  constructor(public rest:HeroSliderService) { }

  ngOnInit() {
    var rellax = new Rellax('.rellax');
    this.getSlides();
  }

  getSlides() {
    this.slides = [];
    this.rest.getSlides().subscribe((data: {}) => {
      this.slides = data;
    });
  }
}