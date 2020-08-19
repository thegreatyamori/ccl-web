/**
 * ***************************************
 * Centro Cristiano de Loja Web
 * @author Jerson Morocho
 *
 * ---------------------------------------
 * - Creation (19-ene-2020)
 * ---------------------------------------
 */

import { Component, OnInit } from "@angular/core";
import { Settings } from 'src/config/config';
import { DeviceDetectorService } from "ngx-device-detector";

@Component({
  selector: "app-pastores",
  templateUrl: "./pastores.component.html",
  styleUrls: ["./pastores.component.scss"]
})
export class PastoresComponent implements OnInit {
  settings: any;
  isMobile: boolean;

  constructor(private deviceService: DeviceDetectorService) {}

  ngOnInit() {
    this.settings = Settings.pastores;
    this.isMobile = this.deviceService.isMobile();
  }
}
