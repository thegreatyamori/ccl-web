/**
 * ***************************************
 * Centro Cristiano de Loja Web
 * @author Jerson Morocho
 *
 * ---------------------------------------
 * - Creation (8-nov-2019)
 * - Added service, titleDocument (9-nov-2019)
 * - Modified onTabChange (11-nov-2019)
 * - Added FadeIn animation (28-ene-2020)
 * ---------------------------------------
 */

import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { trigger, transition, animate, style } from "@angular/animations";
import { NgbTabChangeEvent } from "@ng-bootstrap/ng-bootstrap";
import { NgxSpinnerService } from "ngx-spinner";
import { RootObject as Res, Tab } from "src/app/models/quienesSomos";
import { QuienesSomosService } from "src/app/services/quienes-somos.service";
import { Settings } from 'src/config/config';

@Component({
  selector: "app-quienes-somos",
  templateUrl: "./quienes-somos.component.html",
  styles: [``],
  animations: [
    trigger("fadeIn", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate(500, style({ opacity: 1 }))
      ])
    ])
  ]
})
export class QuienesSomosComponent implements OnInit {
  titleTab: string;
  status: boolean;
  tabs: Tab[];
  settings: any;

  constructor(
    private rest: QuienesSomosService,
    private spinner: NgxSpinnerService,
    private titleDocument: Title
  ) {}

  ngOnInit() {
    this.titleTab = "Reseña Histórica";
    this.titleDocument.setTitle(this.titleTab);
    this.settings = Settings.pages;
    this.spinner.show();
    this.getPage();
  }

  /**
   * Se suscribe al servicio QuienesSomosService y obtiene
   * un stream de tabs.
   */
  getPage(): void {
    this.rest.data$.subscribe((data: Res) => {
      // console.log(data);
      this.status = data.status;
      this.tabs = data.res;
      this.spinner.hide();
    });
  }

  /**
   * Detecta el evento al cambiar entre tabs
   * y setea el titulo correspondiente.
   * @param event NgbTabChangeEvent
   */
  onTabChange(event: NgbTabChangeEvent) {
    let tab = this.tabs.find(tab => tab.id === Number(event.nextId));

    this.titleTab = tab.title;
    this.titleDocument.setTitle(this.titleTab);
  }
}
