import { Component, OnInit, Inject, Renderer, ElementRef, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from "@angular/router";
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
// import { DOCUMENT } from "@angular/platform-browser";
import { Location } from "@angular/common";

import { HeaderComponent } from "./shared/header/header.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // private _router : Subscription;

  // constructor(
  //   private renderer : Renderer,
  //   private router : Router,
  //   private document : any,
  //   private element : ElementRef,
  //   public location : Location) {}

  ngOnInit() {
  //   var header : HTMLElement = this.element.nativeElement.children[0].children[0];
  //   this._router = this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
  //     if (window.outerWidth > 991) {
  //       window.document.children[0].scrollTop = 0;
  //     } else {
  //       window.document.activeElement.scrollTop = 0;
  //     }
  //     // this.header.sidebarClose();

  //     this.renderer.listenGlobal('window', 'scroll', (event) => {
  //       const number = window.scrollY;
  //       var _location = this.location.path();
  //       _location = _location.split('/')[2];

  //       if (number > 150 || window.pageYOffset > 150) {
  //         header.classList.remove('navbar-transparent');
  //       } else if (_location !== 'login' && this.location.path() !== 'page1') {
  //         header.classList.remove('navbar-transparent');
          
  //       }
  //     })
  //   });
  }
}
