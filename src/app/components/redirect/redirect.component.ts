import { Component, OnInit, Inject } from '@angular/core';
import { WINDOW } from 'src/app/services/window.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-redirect',
  template: `
    <div class="redirect">
      <h1>Espera mientras te redirigimos al sitio...</h1>
    </div>
  `,
  styles: [
    `
      .redirect {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `,
  ],
})
export class RedirectComponent implements OnInit {
  constructor(@Inject(WINDOW) private window: Window, private router: Router) {}

  ngOnInit(): void {
    let redirect = '';

    switch (this.router.url) {
      case '/live': {
        redirect = 'https://centrocristianodeloja.online.church/';
        break;
      }
      case '/aula-virtual': {
        redirect = 'https://www.eva.centrocristianodeloja.org/';
        break;
      }
      default:
        break;
    }
    this.window.open(redirect, '_self');
  }
}
