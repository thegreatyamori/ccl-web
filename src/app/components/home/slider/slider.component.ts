/**
 * ***************************************
 * Centro Cristiano de Loja Web
 * @author Jerson Morocho
 *
 * ---------------------------------------
 * - Creation (30-ene-2020)
 * ---------------------------------------
 */

import { Component, OnInit } from "@angular/core";
import { HomeService } from "src/app/services/home.service";
import { RootObject as Res, Slide } from "src/app/models/slide";
import { Carousel } from "src/app/models/carousel";
import { Settings } from "src/app/models/config";

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.scss"]
})
export class SliderComponent implements OnInit {
  customOptions: Carousel;
  settings: any;
  status: boolean;
  slides: Slide[];

  constructor(private rest: HomeService) {}

  ngOnInit() {
    this.getSlides();
    this.customOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: false,
      dots: false,
      navSpeed: 700,
      navText: ["", ""],
      autoplayTimeout: 7500,
      autoplaySpeed: 2000,
      autoplay: true,
      responsive: {
        0: { items: 1 },
        576: { items: 2 },
        850: { items: 3 },
        1200: { items: 3 }
      },
      nav: false
    };
    this.settings = Settings.slider;
  }

  /**
   * Se suscribe al servicio Home y obtiene los sliders
   */
  getSlides(): void {
    this.rest.getSlides().subscribe((data: Res) => {
      this.status = data.status;
      this.slides = data.res;
    });
  }
}
