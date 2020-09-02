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
 * - Manipulating DOM with enterely renderer2 (27-ene-2020)
 * ---------------------------------------
 */

import { Component, OnInit, Renderer2, ElementRef, ViewChild, HostListener, Inject } from '@angular/core';
import { Location, DOCUMENT } from '@angular/common';
import { WINDOW } from 'src/app/services/window.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
    `
      .navbar-brand {
        padding: 0;
        display: flex;
        align-items: center;
      }
    `,
  ],
})
export class HeaderComponent implements OnInit {
  title: string = 'Centro Cristiano de loja';
  private sidebarVisible: boolean;

  @ViewChild('navbarToggler') toggleButton: ElementRef;
  @ViewChild('navbar') navbar: ElementRef;

  constructor(
    public location: Location,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window
  ) {}

  ngOnInit() {
    this.sidebarVisible = false;
  }

  @HostListener('window:scroll', [])
  /**
   * Permite cambiar el color de la navbar
   */
  onWindowScroll(): void {
    if (this.window.pageYOffset > 150) {
      this.renderer.removeClass(this.navbar.nativeElement, 'navbar-transparent');
    } else {
      this.renderer.addClass(this.navbar.nativeElement, 'navbar-transparent');
    }
  }

  /**
   * Despliega el sidebar
   */
  sidebarOpen(): void {
    const html = this.document.querySelector('html');

    setTimeout(() => {
      this.renderer.addClass(this.toggleButton.nativeElement, 'toggled');
    }, 500);

    this.sidebarVisible = true;
    this.renderer.addClass(html, 'nav-open');
  }

  /**
   * Cierra el sidebar
   */
  sidebarClose(): void {
    const html = this.document.querySelector('html');

    this.renderer.removeClass(this.toggleButton.nativeElement, 'toggled');
    this.sidebarVisible = false;
    this.renderer.removeClass(html, 'nav-open');
  }

  sidebarToggle(): void {
    if (!this.sidebarVisible) this.sidebarOpen();
    else this.sidebarClose();
  }

  live() {
    return {
      'btn-danger nav-pulse': true,
    };
  }
}
