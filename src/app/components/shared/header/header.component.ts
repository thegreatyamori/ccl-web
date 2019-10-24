/**
 * ***************************************
 * Centro Cristiano de Loja Web
 * @author Jerson Morocho
 * 
 * ---------------------------------------
 * - Creation (9-sep-2019)
 * - Restructuration using @ViewChild (28-sep-2019)
 * - Added transparency on scroll (29-sep-2019)
 * - Deleted FaIconLibrary (3-oct-2019)
 * ---------------------------------------
 */

import { Component, OnInit, Renderer2, ElementRef, ViewChild, HostListener } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [`
    .navbar-brand {
      padding: 0;
      display: flex;
      align-items: center;
    }
  `]
})
export class HeaderComponent implements OnInit {
  title: string = 'Centro Cristiano de loja'
  sidebarVisible: boolean;
  
  @ViewChild("navbarToggler", { static: false }) toggleButton: ElementRef;
  @ViewChild("navbar", { static: false }) navbar: ElementRef;
  
  constructor(public location: Location, private renderer: Renderer2, private element: ElementRef) {
    this.sidebarVisible = false;
  }

  ngOnInit() { }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event) {
    if (window.pageYOffset > 150)
      this.renderer.removeClass(this.navbar.nativeElement, 'navbar-transparent');
    else
      this.renderer.addClass(this.navbar.nativeElement, 'navbar-transparent');
  }

  sidebarOpen() {
    const html = document.getElementsByTagName('html')[0];
    setTimeout(() => {
      this.renderer.addClass(this.toggleButton.nativeElement, 'toggled');
    }, 500);
    
    this.sidebarVisible = true;
    html.classList.add('nav-open');
  }

  sidebarClose() {
    const html = document.getElementsByTagName('html')[0];
    this.renderer.removeClass(this.toggleButton.nativeElement, 'toggled');
    this.sidebarVisible = false;
    html.classList.remove('nav-open');
  }

  sidebarToggle() {
    if (!this.sidebarVisible) this.sidebarOpen();
    else if (this.sidebarVisible) this.sidebarClose();
  }
}
