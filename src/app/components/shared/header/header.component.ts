import { Component, Directive, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
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
  // private toggleButton : any;
  private sidebarVisible : boolean;
  
  @ViewChild("navbarToggler", { static: false }) toggleButton: ElementRef;
  
  constructor(
    private library: FaIconLibrary, 
    public location: Location,
    private renderer: Renderer2,
    private element: ElementRef) {
    library.addIcons(faBroadcastTower, faUsers, faPlug, faFacebook, faTwitter, faInstagram, faYoutube);
    this.sidebarVisible = false;
  }

  ngOnInit() {
  }

  sidebarOpen() {
    const html = document.getElementsByTagName('html')[0];
    setTimeout(() => {
      this.renderer.addClass(this.toggleButton.nativeElement, 'toggled');
    }, 500);
    
    html.classList.add('nav-open');
    this.sidebarVisible = true;
  }
  sidebarClose() {
    const html = document.getElementsByTagName('html')[0];
    this.renderer.removeClass(this.toggleButton.nativeElement, 'toggled');
    this.sidebarVisible = false;
    html.classList.remove('nav-open');
  }
  sidebarToggle() {
    if (this.sidebarVisible === false) this.sidebarOpen();
    else this.sidebarClose();
  }
}
