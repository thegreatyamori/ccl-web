/**
 * ***************************************
 * Centro Cristiano de Loja Web
 * @author Jerson Morocho
 *
 * ---------------------------------------
 * - Creation (26-ene-2020)
 * ---------------------------------------
 */

import { Component, OnInit } from "@angular/core";
import { Carousel } from "src/app/models/carousel";
import { Settings } from 'src/config/config';

@Component({
  selector: "sponsor-slider",
  templateUrl: "./sponsor-slider.component.html",
  styleUrls: ["./sponsor-slider.component.scss"]
})
export class SponsorSliderComponent implements OnInit {
  customOptions: Carousel;
  sponsors: any;

  constructor() {}

  ngOnInit() {
    this.sponsors = Settings.sponsors;
    this.customOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: false,
      dots: false,
      navSpeed: 700,
      navText: ["", ""],
      autoplayTimeout: 3500,
      autoplaySpeed: 1000,
      autoplay: true,
      responsive: {
        0: {
          items: 1
        }
      },
      nav: false
    };
  }
}
