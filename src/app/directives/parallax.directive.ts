import { Directive, Inject, ElementRef, Renderer2, HostListener, Input } from '@angular/core';
import { WINDOW } from '../services/window.service';
import { DeviceDetectorService } from 'ngx-device-detector';

@Directive({
  selector: '[parallax]',
})
export class ParallaxDirective {
  isDesktop: boolean;

  @Input() speedImg: number;
  @Input() speedContainer: number;

  constructor(
    @Inject(WINDOW) private window: Window,
    private el: ElementRef,
    private deviceService: DeviceDetectorService,
    private renderer: Renderer2
  ) {
    this.isDesktop = deviceService.isDesktop();
  }

  /**
   * Crea un efecto parallax doble sobre un elemento
   */
  @HostListener('window:scroll') parallax(): void {
    if (this.isDesktop) {
      const distance = this.window.scrollY;
      const bgImage = this.el.nativeElement;
      const header = this.renderer.parentNode(bgImage);
      const sImg = distance * this.speedImg;
      const sContainer = distance * this.speedContainer;

      // Velocidad del container
      this.renderer.setStyle(header, 'transform', `translateY(${sContainer}px)`);

      // Velocidad de la imagen
      this.renderer.setStyle(bgImage, 'transform', `translateY(${sImg}px)`);
    }
  }
}
