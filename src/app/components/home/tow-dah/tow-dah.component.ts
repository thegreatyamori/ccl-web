/**
 * ***************************************
 * Centro Cristiano de Loja Web
 * @author Jerson Morocho
 *
 * ---------------------------------------
 * - Creation (10-oct-2019)
 * ---------------------------------------
 */

import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tow-dah",
  templateUrl: "./tow-dah.component.html",
  styleUrls: ["./tow-dah.component.scss"]
})
export class TowDahComponent implements OnInit {
  settings: any;

  constructor() {}

  ngOnInit() {
    this.settings = {
      bg_image: "assets/img/home/bg-buttons-bar.svg",
      logo: "assets/img/home/tow-dah.jpeg",
      bg_image_tow: "assets/img/home/bg-tow-dah.jpg",
      social: [
        {
          text: "Siguenos en YouTube",
          icon: "youtube",
          typeIcon: "fab",
          link: "https://www.youtube.com/channel/UCjDgHbztvOQayUItvvhGUAg"
        },
        {
          text: "Siguenos en Instagram",
          icon: "instagram",
          typeIcon: "fab",
          link: "https://www.instagram.com/towdah.ccl"
        },
        {
          text: "Siguenos en Facebook",
          icon: "facebook",
          typeIcon: "fab",
          link: "https://www.facebook.com/Towdah.ccl"
        },
        {
          text: "Escúchanos en Deezer",
          icon: "align-left",
          typeIcon: "fas",
          link: "https://www.deezer.com/en/album/69125232"
        },
        {
          text: "Escúchanos en Apple Music",
          icon: "apple",
          typeIcon: "fab",
          link:
            "https://music.apple.com/ec/album/manifestando-su-gloria/1417446915"
        }
        // {
        //   text: "Escúchanos en Spotify",
        //   icon: "spotify",
        //   typeIcon: "fab",
        //   link:
        //     "https://open.spotify.com/artist/4YTjf9SYX6HL0eOaWEoMng?si=BoQ-1RyGSLyuQCAoLUQ_Eg"
        // }
      ]
    };
  }
}
