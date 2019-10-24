/**
 * ***************************************
 * Centro Cristiano de Loja Web
 * @author Jerson Morocho
 * 
 * ---------------------------------------
 * - Creation (24-oct-2019)
 * - Added @var rand & @var showImage (4-nov-2019)
 * ---------------------------------------
 */

import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { Slide } from 'src/app/models/slide';

@Component({
  selector: 'app-hero-slider',
  templateUrl: './hero-slider.component.html',
  styles: [`
    .img-thumb {
      width: 100%;
      height: auto;
      overflow: hidden;
    }
    // picture.lazy img {
    //   filter: blur(20px);
    // }
    // picture img {
    //   transition: filter 0.5s;
    // }
  `]
})

export class HeroSliderComponent implements OnInit {
  slides: Slide[];
  showImage: boolean;
  rand = ['/dog', '/paris', '/girl'][Math.floor(Math.random() * 3)];

  constructor(private rest: HomeService) { }

  ngOnInit() {
    this.getSlides();
  }

  getSlides() {
    this.rest.getSlides().subscribe((data: Slide[]) => {
      this.slides = data;
    }, err => console.error(err));
  }
}