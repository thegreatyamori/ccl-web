/**
 * ***************************************
 * Centro Cristiano de Loja Web
 * @author Jerson Morocho
 * 
 * ---------------------------------------
 * - Creation (4-nov-2019)
 * ---------------------------------------
 */

import { Directive, ElementRef, Output, EventEmitter, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[lazyImage]'
})
export class LazyImgDirective {

  @Output() public lazyImage: EventEmitter<any> = new EventEmitter();

  private _intersectionObserver? : IntersectionObserver;

  constructor(private _element: ElementRef) { }

  public ngAfterViewInit () {
    this._intersectionObserver = new IntersectionObserver(entries => {
      this.checkForIntersection(entries);
    }, { rootMargin: "100px", threshold: 1.0 });
    
    this._intersectionObserver.observe(<Element>(this._element.nativeElement));
  }

  private checkForIntersection (entries: IntersectionObserverEntry[]) {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (entry.intersectionRatio > 0) {
        this.lazyImage.emit();
        this._intersectionObserver.unobserve(<Element>(this._element.nativeElement));
        this._intersectionObserver.disconnect();
      }
    });
  }
}
