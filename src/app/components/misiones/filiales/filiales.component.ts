import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { MisionesService } from "src/app/services/misiones.service";
import { NgxSpinnerService } from "ngx-spinner";
import { Mision, Misiones } from "src/app/models/misiones";
import { Settings } from 'src/config/config';

@Component({
  selector: "app-filiales",
  templateUrl: "./filiales.component.html",
  styleUrls: ["./filiales.component.scss"]
})
export class FilialesComponent implements OnInit {
  settings: any;
  status: boolean;
  filiales: Mision[];

  constructor(
    private titleDocument: Title,
    private rest: MisionesService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    let [misiones, , filiales] = Settings.misiones.cards;
    this.titleDocument.setTitle(`${misiones.title} ${filiales.title}`);
    this.spinner.show();
    this.filiales = [];
    this.settings = {
      title: `${misiones.title} ${filiales.title}`,
      bg_image: filiales.bg
    };
    this.getFiliales();
  }

  /**
   * Se suscribe al observable ReplaySubject para obtener los campos blancos
   */
  getFiliales(): void {
    this.rest.dataOB$.subscribe((data: Misiones) => {
      this.status = data.status;
      this.filiales = data.res.map(mission => {
        mission.mission_locale = "obra filial";
        return mission;
      });
      this.spinner.hide();
    });
  }
}
