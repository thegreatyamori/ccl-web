/**
 * ***************************************
 * Centro Cristiano de Loja Web
 * @author Jerson Morocho
 *
 * ---------------------------------------
 * - Creation (6-oct-2019)
 * - Modified textHDB to textMisions (3-ene-2020)
 * ---------------------------------------
 */

import { Component, OnInit } from '@angular/core';
import { Settings } from 'src/config/config';
import { backgroundImage } from 'src/app/utils';

@Component({
  selector: 'app-buttons-bar',
  templateUrl: './buttons-bar.component.html',
  styleUrls: ['./buttons-bar.component.scss'],
})
export class ButtonsBarComponent implements OnInit {
  settings: any;

  constructor() {}

  ngOnInit() {
    this.settings = Settings.buttons_bar;
  }

  /**
   * Envuelve la imagen en una funcion css
   * @returns string url()
   */
  setBackgroundImageUrl(): object {
    return backgroundImage(this.settings.bg_image);
  }
}
