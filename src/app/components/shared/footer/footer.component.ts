import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private library: FaIconLibrary) {
    library.addIcons(faEnvelope, faAngleDoubleRight, faFacebook, faTwitter, faInstagram, faYoutube);
  }

  ngOnInit() {
  }

}
