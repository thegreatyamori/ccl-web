/**
 * ***************************************
 * Centro Cristiano de Loja Web
 * @author Jerson Morocho
 *
 * ---------------------------------------
 * - Creation (29-sep-2019)
 * - Added Title Document (9-nov-2019)
 * - Added Donation Img (12-oct-2020)
 * ---------------------------------------
 */

import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DeviceDetectorService } from 'ngx-device-detector';
import { backgroundImage } from 'src/app/utils';
import { Settings } from 'src/config/config';

@Component({
  selector: 'app-donaciones',
  templateUrl: './donaciones.component.html',
  styleUrls: ['./donaciones.component.scss'],
})
export class DonacionesComponent implements OnInit {
  isDesktop: boolean;
  isMobile: boolean;
  settings: any;

  constructor(private titleDocument: Title, private deviceService: DeviceDetectorService) {}

  ngOnInit() {
    this.titleDocument.setTitle('Donaciones');
    this.isDesktop = this.deviceService.isDesktop();
    this.isMobile = this.deviceService.isMobile();
    this.settings = Settings.donaciones;
  }

  /**
   * Cambiar el tamaño del texto segun el tipo de dispositivo
   */
  textSize() {
    return { h3: this.isDesktop };
  }

  /**
   * Cambiar el tamaño del titulo segun el tipo de dispositivo
   */
  titleSize() {
    return { h2: this.isDesktop, h3: this.isMobile };
  }

  /**
   * Envuelve la imagen en una funcion css
   * @returns string url()
   */
  setBackgroundImageUrl(): object {
    return backgroundImage(this.settings.bg_image);
  }
}
