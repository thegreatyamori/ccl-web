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

import { OnInit, Component } from "@angular/core";
import { HomeService } from "src/app/services/home.service";
import { RootObject as Res, Slide } from "src/app/models/slide";

@Component({
  selector: "app-hero-slider",
  templateUrl: "./hero-slider.component.html",
  styles: [""]
})
export class HeroSliderComponent implements OnInit {
  status: boolean;
  slides: Slide[];
  settings: any;

  // private delay = (t: number) => new Promise(resolve => setTimeout(resolve, t));

  constructor(private rest: HomeService) {}

  ngOnInit() {
    this.getSlides();
    this.settings = {
      default: {
        large: "assets/img/home/large.jpg",
        medium: "assets/img/home/medium.jpg",
        small: "assets/img/home/small.jpg"
      }
    };
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
