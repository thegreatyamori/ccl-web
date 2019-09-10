import { Component, OnInit, ElementRef } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faBroadcastTower, faUsers, faPlug } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public title = 'Centro Cristiano de loja'
  private toggleButton : any;
  private sidebarVisible : boolean;

  constructor(private library: FaIconLibrary, public location: Location, private element: ElementRef) {
    library.addIcons(faBroadcastTower, faUsers, faPlug, faFacebook, faTwitter, faInstagram, faYoutube);
    this.sidebarVisible = false;
  }

  ngOnInit() {
    const navbar: HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
  }
  sidebarOpen() {
    const toggleButton = this.toggleButton;
    const html = document.getElementsByTagName('html')[0];
    setTimeout(() => {
      toggleButton.classList.add('toggled');
    }, 500);
    html.classList.add('nav-open');

    this.sidebarVisible = true;
  }
  sidebarClose() {
    const html = document.getElementsByTagName('html')[0];
    this.toggleButton.classList.remove('toggled');
    this.sidebarVisible = false;
    html.classList.remove('nav-open');
  }
  sidebarToggle() {
    if (this.sidebarVisible === false)
      this.sidebarOpen();
    else
      this.sidebarClose();
  }
}
