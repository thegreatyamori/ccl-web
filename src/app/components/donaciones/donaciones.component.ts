/**
 * ***************************************
 * Centro Cristiano de Loja Web
 * @author Jerson Morocho
 *
 * ---------------------------------------
 * - Creation (29-sep-2019)
 * - Added Title Document (9-nov-2019)
 * ---------------------------------------
 */

import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-donaciones',
  templateUrl: './donaciones.component.html',
  styleUrls: ['./donaciones.component.scss'],
})
export class DonacionesComponent implements OnInit {
  isDesktop: boolean;

  constructor(private titleDocument: Title, private deviceService: DeviceDetectorService) {}

  ngOnInit() {
    this.titleDocument.setTitle('Donaciones');
    this.isDesktop = this.deviceService.isDesktop();
  }

  /**
   * Cambiar el tamaño del texto segun el tipo de dispositivo
   */
  textSize() {
    return {'h3': this.isDesktop}
  }
}
