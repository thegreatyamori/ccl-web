import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Settings } from 'src/app/models/config';
import { Mision, Misiones } from 'src/app/models/misiones';
import { MisionesService } from 'src/app/services/misiones.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: "app-transculturales",
  templateUrl: "./transculturales.component.html",
  styleUrls: ["./transculturales.component.scss"]
})
export class TransculturalesComponent implements OnInit {
  settings: any;
  status: boolean;
  transculturales: Mision[];

  constructor(
    private titleDocument: Title,
    private rest: MisionesService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    let [misiones, transculturales] = Settings.misiones.cards;
    this.titleDocument.setTitle(`${misiones.title} ${transculturales.title}`);
    this.spinner.show();
    this.transculturales = [];
    this.settings = {
      title: `${misiones.title} ${transculturales.title}`,
      bg_image: transculturales.bg
    };
    this.getTransculturales();
  }

  /**
   * Se suscribe al observable ReplaySubject para obtener los campos blancos
   */
  getTransculturales(): void {
    this.rest.dataT$.subscribe((data: Misiones) => {
      this.status = data.status;
      this.transculturales = data.res;
      this.spinner.hide();
    });
  }
}
