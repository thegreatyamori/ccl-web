import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Settings } from 'src/config/config';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-misiones',
  templateUrl: './misiones.component.html',
  styleUrls: ['./misiones.component.scss'],
})
export class MisionesComponent implements OnInit {
  card: any;
  isMobile: boolean;

  constructor(private titleDocument: Title, private deviceDetector: DeviceDetectorService) {}

  ngOnInit() {
    this.card = Settings.misiones.general;
    this.titleDocument.setTitle(this.card.title);
    this.isMobile = this.deviceDetector.isMobile();
  }
}
