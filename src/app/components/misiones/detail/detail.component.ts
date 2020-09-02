/**
 * ***************************************
 * Centro Cristiano de Loja Web
 * @author Jerson Morocho
 *
 * ---------------------------------------
 * - Creation (22-ago-2020)
 * ---------------------------------------
 */

import { Component, OnInit, Inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MisionesService } from 'src/app/services/misiones.service';
import { Misiones, Mision } from 'src/app/models/misiones';
import { Settings } from 'src/config/config';
import { View as MissionView } from 'src/app/models/missionView';
import { environment } from 'src/environments/environment';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  status: boolean;
  isMobile: boolean;
  misiones: Mision[];
  settings: any;

  constructor(
    private titleDocument: Title,
    private route: ActivatedRoute,
    private rest: MisionesService,
    private spinner: NgxSpinnerService,
    private deviceDetector: DeviceDetectorService
  ) {}

  ngOnInit() {
    const { transculturales, locales, campos_blancos } = Settings.misiones;
    this.isMobile = this.deviceDetector.isMobile();
    this.spinner.show();
    this.misiones = [];

    switch (this.route.snapshot.paramMap.get('name')) {
      case 'transculturales':
        this.getTransculturales(transculturales);
        break;
      case 'locales':
        this.getLocales(locales);
        break;
      case 'campos-blancos':
        this.getCamposBlancos(campos_blancos);
        break;
    }
  }

  /**
   * Se suscribe al observable ReplaySubject para obtener las obras filiales
   */
  getLocales(locales: MissionView): void {
    const { bg, ...other } = locales;

    this.titleDocument.setTitle(other.title);
    this.settings = {
      ...other,
      bg_image: this.bgMission(bg),
    };

    this.rest.dataOB$.subscribe((data: Misiones) => {
      this.status = data.status;
      console.log(data.res);

      this.misiones = data.res.map((mission) => {
        mission.subtype = 'obra local';
        mission.image.mission = this.transformImg(mission.image.mission);
        mission.image.servant = this.transformImg(mission.image.servant);
        return mission;
      });
      this.spinner.hide();
    });
  }

  /**
   * Se suscribe al observable ReplaySubject para obtener los campos blancos
   */
  getCamposBlancos(campos_blancos: MissionView): void {
    const { bg, ...other } = campos_blancos;

    this.titleDocument.setTitle(other.title);
    this.settings = {
      ...other,
      bg_image: this.bgMission(bg),
    };

    this.rest.dataCB$.subscribe((data: Misiones) => {
      this.status = data.status;
      this.misiones = data.res.map((mission) => {
        mission.subtype = 'campos blancos';
        mission.image.mission = this.transformImg(mission.image.mission);
        mission.image.servant = this.transformImg(mission.image.servant);
        return mission;
      });
      this.spinner.hide();
    });
  }

  /**
   * Se suscribe al observable ReplaySubject para obtener las misiones transculturales
   */
  getTransculturales(transculturales: MissionView): void {
    const { bg, ...other } = transculturales;

    this.titleDocument.setTitle(other.title);
    this.settings = {
      ...other,
      bg_image: this.bgMission(bg),
    };

    this.rest.dataT$.subscribe((data: Misiones) => {
      this.status = data.status;
      this.misiones = data.res.map((mission) => {
        mission.image.mission = this.transformImg(mission.image.mission);
        mission.image.servant = this.transformImg(mission.image.servant);
        return mission;
      });
      this.spinner.hide();
    });
  }

  /**
   * Devuelve un background image del tipo de mision
   */
  private bgMission(image: string): object {
    return { 'background-image': `url('${image}')` };
  }

  /**
   * Transforma el url de una imagen para ser leída
   */
  private transformImg(image: string): string {
    return `${environment.storage}${image}`;
  }
}
