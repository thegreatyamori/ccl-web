import { Component, OnInit, ViewChild, Inject } from '@angular/core';
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
  faPause,
  faFireAlt,
  faInfo,
  faChalkboard,
  faDonate,
  faMale,
  faFemale,
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
  faApple,
  faDeezer,
} from '@fortawesome/free-brands-svg-icons';
import { RadioHelperService } from './services/radio-helper.service';
import { audioManager } from './models/audioManager';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { HeaderComponent } from './components/shared/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  audioOptions: audioManager;
  @ViewChild(HeaderComponent) navbar: HeaderComponent;

  constructor(private library: FaIconLibrary, private router: Router, private helper: RadioHelperService) {
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
      faFireAlt,
      faInfo,
      faChalkboard,
      faDonate,
      faMale,
      faFemale,
      faFacebook,
      faWhatsapp,
      faTwitter,
      faInstagram,
      faYoutube,
      faChrome,
      faFirefox,
      faSpotify,
      faApple,
      faDeezer
    );
  }

  ngOnInit() {
    this.helper.audioState.subscribe((options: audioManager) => (this.audioOptions = options));
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
      this.navbar.sidebarClose();

      if (this.audioOptions.id === 'initial') this.helper.playerHidden(true);
      else {
        if (event.url === '/radio') this.helper.playerHidden(true);
        else this.helper.playerHidden(false);
      }
    });
  }
}
