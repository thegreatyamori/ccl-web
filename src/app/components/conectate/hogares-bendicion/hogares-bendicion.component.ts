/**
 * ***************************************
 * Centro Cristiano de Loja Web
 * @author Jerson Morocho
 *
 * ---------------------------------------
 * - Creation (12-feb-2020)
 * ---------------------------------------
 */

import { Component, OnInit } from "@angular/core";
import { DeviceDetectorService } from "ngx-device-detector";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-hogares-bendicion",
  templateUrl: "./hogares-bendicion.component.html",
  styleUrls: ["./hogares-bendicion.component.scss"]
})
export class HogaresBendicionComponent implements OnInit {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;

  constructor(
    private deviceService: DeviceDetectorService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.isMobile = this.deviceService.isMobile();
    this.isTablet = this.deviceService.isTablet();
    this.isDesktop = this.deviceService.isDesktop();

    this.showSpinner();
  }

  private delay = (t: number) => new Promise(resolve => setTimeout(resolve, t));

  showSpinner() {
    this.spinner.show();

    this.delay(3000).then(() => this.spinner.hide());
  }
}
