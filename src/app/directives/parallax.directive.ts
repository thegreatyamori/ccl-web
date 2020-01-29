import {
  Directive,
  Inject,
  ElementRef,
  Renderer2,
  HostListener,
  Input
} from "@angular/core";
import { WINDOW } from "../services/window.service";

@Directive({
  selector: "[parallax]"
})
export class ParallaxDirective {
  @Input() speedImg: number;
  @Input() speedContainer: number;

  constructor(
    @Inject(WINDOW) private window: Window,
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  /**
   * Crea un efecto parallax doble sobre un elemento
   */
  @HostListener("window:scroll") parallax(): void {
    const distance = this.window.scrollY;
    const bgImage = this.el.nativeElement;
    const header = this.renderer.parentNode(bgImage);
    const sImg = distance * this.speedImg;
    const sContainer = distance * this.speedContainer;

    // Velocidad del container
    this.renderer.setStyle(
      header,
      "transform",
      `translateY(${sContainer}px)`
    );

    // Velocidad de la imagen
    this.renderer.setStyle(
      bgImage,
      "transform",
      `translateY(${sImg}px)`
    );
  }
}
