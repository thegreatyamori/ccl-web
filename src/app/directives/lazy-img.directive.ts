/**
 * ***************************************
 * Centro Cristiano de Loja Web
 * @author Jerson Morocho
 *
 * ---------------------------------------
 * - Creation (4-nov-2019)
 * ---------------------------------------
 */

import { Directive, ElementRef, Output, EventEmitter } from "@angular/core";

@Directive({
  selector: "[lazyImage]"
})
export class LazyImgDirective {
  @Output() public lazyImage: EventEmitter<any> = new EventEmitter();

  private _intersectionObserver?: IntersectionObserver;

  constructor(private el: ElementRef) {}

  /**
   * Uso del IntersectionObserver para carga diferida de imagenes
   */
  public ngAfterViewInit() {
    this._intersectionObserver = new IntersectionObserver(
      entries => this.checkForIntersection(entries),
      { rootMargin: "100px", threshold: 1.0 }
    );

    this._intersectionObserver.observe(<Element>this.el.nativeElement);
  }

  /**
   * Recorre el array de entradas y emite un evento
   * @param entries This Intersection Observer API interface describes the intersection between the target element and its root container at a specific moment of transition.
   */
  private checkForIntersection(entries: IntersectionObserverEntry[]) {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (entry.intersectionRatio > 0) {
        this.lazyImage.emit();
        this._intersectionObserver.unobserve(<Element>this.el.nativeElement);
        this._intersectionObserver.disconnect();
      }
    });
  }
}
