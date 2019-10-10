import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { 
  faBroadcastTower,
  faUsers,
  faPlug,
  faCalendarAlt,
  faGlobeAmericas,
  faBible,
  faPhone,
  faMapMarkerAlt,
  faMapMarkedAlt,
  faGlobe,
  faEnvelope,
  faAngleDoubleRight,
  faAlignLeft
} from '@fortawesome/free-solid-svg-icons';
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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private library: FaIconLibrary) {
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
      faGlobe,
      faEnvelope,
      faAngleDoubleRight,
      faAlignLeft,
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

  ngOnInit() { }
}
