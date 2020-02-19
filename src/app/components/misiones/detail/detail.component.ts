import { Component, OnInit, Inject } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { MisionesService } from "src/app/services/misiones.service";
import { WINDOW } from 'src/app/services/window.service';
import { Misiones, Mision } from "src/app/models/misiones";
import { Settings } from "src/config/config";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.scss"]
})
export class DetailComponent implements OnInit {
  status: boolean;
  misiones: Mision[];
  settings: any;

  constructor(
    private titleDocument: Title,
    private route: ActivatedRoute,
    private rest: MisionesService,
    private spinner: NgxSpinnerService,
    @Inject(WINDOW) private window: Window
  ) {}

  ngOnInit() {
    const [
      misiones,
      transculturales,
      filiales,
      campos
    ] = Settings.misiones.cards;
    this.spinner.show();
    this.misiones = [];

    switch (this.route.snapshot.paramMap.get("name")) {
      case "transculturales":
        this.getTransculturales(misiones, transculturales);
        break;
      case "filiales":
        this.getFiliales(misiones, filiales);
        break;
      case "campos-blancos":
        this.getCamposBlancos(campos);
        break;
    }
  }

  /**
   * Se suscribe al observable ReplaySubject para obtener las obras filiales
   */
  getFiliales(misiones: any, filiales: any): void {
    const title = `${misiones.title} ${filiales.title}`;

    this.titleDocument.setTitle(title);
    this.settings = {
      title: title,
      bg_image: filiales.bg
    };

    this.rest.dataOB$.subscribe((data: Misiones) => {
      this.status = data.status;
      this.misiones = data.res.map(mission => {
        mission.mission_locale = "obra filial";
        return mission;
      });
      this.spinner.hide();
    });
  }

  /**
   * Se suscribe al observable ReplaySubject para obtener los campos blancos
   */
  getCamposBlancos(camposBlancos: any): void {
    const title = `${camposBlancos.tag} ${camposBlancos.title}`;

    this.titleDocument.setTitle(title);
    this.settings = {
      title: title,
      bg_image: camposBlancos.bg
    };

    this.rest.dataCB$.subscribe((data: Misiones) => {
      this.status = data.status;
      this.misiones = data.res.map(mission => {
        mission.mission_locale = "campos blancos";
        return mission;
      });
      this.spinner.hide();
    });
  }

  /**
   * Se suscribe al observable ReplaySubject para obtener las misiones transculturales
   */
  getTransculturales(misiones: any, transculturales: any): void {
    const title = `${misiones.title} ${transculturales.title}`;

    this.titleDocument.setTitle(title);
    this.settings = {
      title: title,
      bg_image: transculturales.bg
    };

    this.rest.dataT$.subscribe((data: Misiones) => {
      this.status = data.status;
      this.misiones = data.res;
      this.spinner.hide();
    });
  }

  shoot() {
    try {
      this.confetti({
        startVelocity: 30,
        spread: 360,
        ticks: 60,
        shapes: ["square"],
        origin: {
          x: Math.random(),
          // since they fall down, start a bit higher than random
          y: 0
        }
      });
    } catch (error) {
      console.error("noop, confettijs may not be loaded yet");
    }
  }
  private random(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }
  private confetti(args: any) {
    const end = Date.now() + 15 * 1000;

    const interval = setInterval(() => {
      if (Date.now() > end) {
        return clearInterval(interval);
      }

      this.window["confetti"].apply(this, args);
    }, 200);

    // return this.window["confetti"].apply(this, args);
  }
}
