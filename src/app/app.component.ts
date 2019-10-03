import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { 
  faBroadcastTower,
  faUsers,
  faPlug,
  faCalendarAlt,
  faGlobeAmericas,
  faBible
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebook,
  faTwitter,
  faYoutube,
  faInstagram
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
      faFacebook,
      faTwitter,
      faInstagram,
      faYoutube
    );
  }

  ngOnInit() { }
}
