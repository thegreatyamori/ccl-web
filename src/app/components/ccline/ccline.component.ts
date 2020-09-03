/**
 * ***************************************
 * Centro Cristiano de Loja Web
 * @author Jerson Morocho
 *
 * ---------------------------------------
 * - Creation (30-ago-2020)
 * ---------------------------------------
 */

import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Settings } from 'src/config/config';
import { backgroundImage } from 'src/app/utils';

@Component({
  selector: 'app-ccline',
  templateUrl: './ccline.component.html',
  styleUrls: ['./ccline.component.scss'],
})
export class CclineComponent implements OnInit {
  settings: any;

  constructor(private titleDocument: Title) {}

  ngOnInit(): void {
    this.titleDocument.setTitle('Iglesia Online');
    this.settings = Settings.iglesia_online;
  }

  /**
   * Envuelve la imagen en una funcion css
   * @returns string url()
   */
  setBackgroundImageUrl(): object {
    return backgroundImage(this.settings.bg_image);
  }
}
