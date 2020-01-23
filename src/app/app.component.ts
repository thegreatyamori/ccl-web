import { Component, OnInit } from "@angular/core";
import { FaIconLibrary } from "@fortawesome/angular-fontawesome";
import {
  faBroadcastTower,
  faUsers,
  faPlug,
  faCalendarAlt,
  faGlobeAmericas,
  faBible,
  faPhone,
  faMapMarkerAlt,
  faDirections,
  faMapMarkedAlt,
  faGlobe,
  faEnvelope,
  faAngleDoubleRight,
  faAlignLeft,
  faSearch,
  faArrowLeft,
  faArrowRight,
  faArrowDown,
  faArrowUp,
  faTimes,
  faVolumeUp,
  faVolumeOff,
  faVolumeDown,
  faPlay,
  faPause
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faWhatsapp,
  faTwitter,
  faYoutube,
  faInstagram,
  faChrome,
  faFirefox,
  faSpotify,
  faApple
} from "@fortawesome/free-brands-svg-icons";
import { RadioHelperService } from "./services/radio-helper.service";
import { audioManager } from "./models/audioManager";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  audioOptions: audioManager;

  constructor(
    private library: FaIconLibrary,
    private helper: RadioHelperService
  ) {
    library.addIcons(
      faBroadcastTower,
      faUsers,
      faPlug,
      faCalendarAlt,
      faGlobeAmericas,
      faBible,
      faPhone,
      faMapMarkedAlt,
      faMapMarkerAlt,
      faDirections,
      faGlobe,
      faEnvelope,
      faAngleDoubleRight,
      faAlignLeft,
      faSearch,
      faArrowLeft,
      faArrowRight,
      faArrowDown,
      faArrowUp,
      faTimes,
      faVolumeUp,
      faVolumeOff,
      faVolumeDown,
      faPlay,
      faPause,
      faFacebook,
      faWhatsapp,
      faTwitter,
      faInstagram,
      faYoutube,
      faChrome,
      faFirefox,
      faSpotify,
      faApple
    );
  }

  ngOnInit() {
    this.helper.audioState.subscribe(
      (options: audioManager) => (this.audioOptions = options)
    );
  }

  /**
   * Se activa cuando se cambia a una nueva ruta
   * @param event Evento de cambio de ruta
   */
  onActivate(event: any): void {
    let component = event.__proto__.constructor.name;

    if (this.audioOptions.id === "initial")
      this.helper.playerHidden(true);
    else {
      if (component === "RadioComponent")
        this.helper.playerHidden(true);
      else this.helper.playerHidden(false);
    }
  }
}
