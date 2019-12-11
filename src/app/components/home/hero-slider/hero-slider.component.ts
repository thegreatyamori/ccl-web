/**
 * ***************************************
 * Centro Cristiano de Loja Web
 * @author Jerson Morocho
 * 
 * ---------------------------------------
 * - Creation (24-oct-2019)
 * - Added @var showImage (4-nov-2019)
 * - Added animations (5-nov-2019)
 * ---------------------------------------
 */

import { OnInit, Component, ElementRef, ViewChild } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
} from '@angular/animations';

import { HomeService } from 'src/app/services/home.service';
import { RootObject as Res, Slide } from 'src/app/models/slide';

@Component({
  selector: 'app-hero-slider',
  templateUrl: './hero-slider.component.html',
  styles: [`
    .img-thumb { width: 100%; height: auto; }
    .lazy-bg {
      position: absolute;
      top: 0;
      z-index: 10;
    }
  `],
  animations: [
    trigger('fadeInOut', [
      state('in', style({  opacity: 1 })),
      state('out', style({  opacity: 0 })),
      transition('in => out', [
        animate(1000, keyframes([
          style({ opacity: 1, offset: 0}),
          style({ opacity: 0, offset: 1})
        ]))
      ])
    ])
  ]
})

export class HeroSliderComponent implements OnInit {
  status: boolean;
  slides: Slide[];
  showImage: boolean;
  showBgImage: boolean = true;
  fade: boolean = true;
  private delay = (t: number) => new Promise(resolve => setTimeout(resolve, t));

  @ViewChild("bgImage", { static: false }) bgImage: ElementRef;

  constructor(private rest: HomeService) { }

  ngOnInit() {
    this.getSlides();
  }

  getSlides() {
    this.rest.getSlides().subscribe((data: Res) => {
      this.status = data.status;
      this.slides = data.res;
    });
  }

  imgLoaded() {
    this.delay(1000).then(() => this.fade = false);
    this.delay(2000).then(() => this.showBgImage = false);
  }
}