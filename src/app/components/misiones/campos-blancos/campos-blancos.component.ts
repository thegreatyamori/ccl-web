import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { NgxSpinnerService } from "ngx-spinner";
import { MisionesService } from "src/app/services/misiones.service";
import { Misiones, Mision } from "src/app/models/misiones";
import { Settings } from 'src/config/config';

@Component({
  selector: "app-campos-blancos",
  templateUrl: "./campos-blancos.component.html",
  styleUrls: ["./campos-blancos.component.scss"]
})
export class CamposBlancosComponent implements OnInit {
  settings: any;
  status: boolean;
  camposBlancos: Mision[];

  constructor(
    private titleDocument: Title,
    private rest: MisionesService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    let [, , , camposBlancos] = Settings.misiones.cards;
    this.spinner.show();
    this.camposBlancos = [];
    this.titleDocument.setTitle(`${camposBlancos.tag} ${camposBlancos.title}`);
    this.settings = {
      title: `${camposBlancos.tag} ${camposBlancos.title}`,
      bg_image: camposBlancos.bg
    };
    this.getCamposBlancos();
  }

  /**
   * Se suscribe al observable ReplaySubject para obtener los campos blancos
   */
  getCamposBlancos(): void {
    this.rest.dataCB$.subscribe((data: Misiones) => {
      this.status = data.status;
      this.camposBlancos = data.res.map(mission => {
        mission.mission_locale = "campos blancos";
        return mission;
      });
      this.spinner.hide();
    });
  }
}
