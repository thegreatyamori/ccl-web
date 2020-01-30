/**
 * ***************************************
 * Centro Cristiano de Loja Web
 * @author Jerson Morocho
 *
 * ---------------------------------------
 * - Creation (29-sep-2019)
 * - Added Title Document (9-nov-2019)
 * - Added radio stream (22-ene-2020)
 * ---------------------------------------
 */

import { Component, OnInit, Inject } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { NAVIGATOR } from "src/app/services/navigator.service";

@Component({
  selector: "app-radio",
  templateUrl: "./radio.component.html",
  styleUrls: ["./radio.component.scss"]
})
export class RadioComponent implements OnInit {
  settings: any;

  constructor(
    @Inject(NAVIGATOR) private navigator: any,
    private titleDocument: Title
  ) {}

  ngOnInit() {
    this.titleDocument.setTitle("CCL Radio");
    this.settings = {
      bg_image: "assets/img/bg4.jpg"
    };
    // this.mediaSession();
  }

  // mediaSession() {
  //   // mediaSession docs in: https://developers.google.com/web/updates/2017/02/media-session
  //   // only supported by Chrome & Microsoft Egde
  //   if ("mediaSession" in this.navigator) {
  //     this.navigator.mediaSession.metadata = new MediaMetadata({
  //       title: "Radio CCL",
  //       artist: "",
  //       album: "",
  //       artwork: [
  //         {
  //           src: "assets/img/radio/logo.png",
  //           sizes: "96x96",
  //           type: "image/png"
  //         },
  //         {
  //           src: "assets/img/radio/logo.png",
  //           sizes: "128x128",
  //           type: "image/png"
  //         },
  //         {
  //           src: "assets/img/radio/logo.png",
  //           sizes: "192x192",
  //           type: "image/png"
  //         },
  //         {
  //           src: "assets/img/radio/logo.png",
  //           sizes: "256x256",
  //           type: "image/png"
  //         },
  //         {
  //           src: "assets/img/radio/logo.png",
  //           sizes: "384x384",
  //           type: "image/png"
  //         },
  //         {
  //           src: "assets/img/radio/logo.png",
  //           sizes: "512x512",
  //           type: "image/png"
  //         }
  //       ]
  //     });
  //   }
  // }
}
