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
import { RadioHelperService } from './services/radio-helper.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  constructor(private library: FaIconLibrary, private helper: RadioHelperService) {
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

  ngOnInit() {}

  /**
   * Se activa cuando se cambia a una nueva ruta
   * @param event Evento de cambio de ruta
   */
  onActivate(event: any): void {
    if (event.__proto__.constructor.name === "RadioComponent")
      this.helper.changeVisibility(true); // mini-player oculto
    else
      this.helper.changeVisibility(false); // mini-player visible
  }
}
