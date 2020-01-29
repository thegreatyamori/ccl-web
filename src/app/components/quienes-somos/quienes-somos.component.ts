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
import { NgbTabChangeEvent } from "@ng-bootstrap/ng-bootstrap";
import { trigger, transition, animate, style } from "@angular/animations";

import { RootObject as Res, Tab } from "src/app/models/quienesSomos";
import { QuienesSomosService } from "src/app/services/quienes-somos.service";

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
  title: string;
  status: boolean;
  tabs: Tab[];
  settings: any;

  constructor(
    private rest: QuienesSomosService,
    private titleDocument: Title
  ) {}

  ngOnInit() {
    this.titleDocument.setTitle(this.title);
    this.title = "Reseña Histórica";
    this.settings = {
      title: "¡Tu misión es hoy!",
      bg_image: "assets/img/quienes-somos/header.jpg",
      logo_title: "assets/img/logo_cropped.png"
    };
    this.getPage();
  }

  /**
   * Se suscribe al servicio QuienesSomosService y obtiene
   * un stream de tabs.
   */
  getPage(): void {
    this.rest.getPage().subscribe((data: Res) => {
      this.status = data.status;
      this.tabs = data.res;
    });
  }

  /**
   * Detecta el evento al cambiar entre tabs
   * y setea el titulo correspondiente.
   * @param event NgbTabChangeEvent
   */
  onTabChange(event: NgbTabChangeEvent) {
    let tab = this.tabs.find(tab => tab.id === Number(event.nextId));

    this.title = tab.title;
    this.titleDocument.setTitle(this.title);
  }
}
