import { Component, OnInit, Renderer2, ElementRef, ViewChild, HostListener } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

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
  @ViewChild("navbar", { static: false }) navbar: ElementRef;
  
  constructor(public location: Location, private renderer: Renderer2, private element: ElementRef) {
    this.sidebarVisible = false;
  }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    if (window.pageYOffset > 150) {
      this.renderer.removeClass(this.navbar.nativeElement, 'navbar-transparent');
    } else {
      this.renderer.addClass(this.navbar.nativeElement, 'navbar-transparent');
    }
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
