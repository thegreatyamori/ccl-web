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

@Component({
  selector: "sponsor-slider",
  templateUrl: "./sponsor-slider.component.html",
  styleUrls: ["./sponsor-slider.component.scss"]
})
export class SponsorSliderComponent implements OnInit {
  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ["", ""],
    autoplayTimeout : 3500,
    autoplaySpeed: 3000,
    autoplay: true,
    responsive: {
      0: {
        items: 1
      }
    },
    nav: false
  };
  sponsors: any;

  constructor() {}

  ngOnInit() {
    this.sponsors = [
      {
        src: "assets/img/logo_cropped.png",
        title: "Logo"
      },
      {
        src: "assets/img/logo_cropped.png",
        title: "Logo"
      },
      {
        src: "assets/img/logo_cropped.png",
        title: "Logo"
      },
      {
        src: "assets/img/logo_cropped.png",
        title: "Logo"
      },
      {
        src: "assets/img/logo_cropped.png",
        title: "Logo"
      },
      {
        src: "assets/img/logo_cropped.png",
        title: "Logo"
      }
    ];
  }
}
