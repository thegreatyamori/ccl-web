import { Component, OnInit, Inject } from "@angular/core";
import { WINDOW } from "src/app/services/window.service";

@Component({
  selector: "app-redirect",
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
  constructor(@Inject(WINDOW) private window: Window) {}

  ngOnInit(): void {
    this.window.open("https://example.com", "_self");
  }
}
