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

  // type = ['dog', 'cat', 'city'];
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
        // this.loadImage(this._element.nativeElement);
        this._intersectionObserver.unobserve(<Element>(this._element.nativeElement));
        this._intersectionObserver.disconnect();
      }
    });
  }

  // private loadImage(picture: Element) {
  //   let sources: HTMLCollection = picture.children;
  //   // TODO Cambiar el loadingPath cuando este con urls de producción
  //   let loadingPath = "https://loremflickr.com";
  //   let sizes = ['/1440/960', '/840/1000', '/576/800']; // lg - md - sm
  //   let rand = this.type[Math.floor(Math.random() * this.type.length)];

  //   for (let index = 0; index < sources.length; index++) {
  //     let source = sources[index];
  //     if (source.hasAttribute("srcset"))
  //       source.setAttribute("srcset", `${loadingPath}${sizes[index]}/${rand}`);
  //     else
  //       source.setAttribute("src", `${loadingPath}${sizes[0]}/${rand}`);

  //     // source.addEventListener('load', image => {
  //     //   picture.classList.remove("lazy");
  //     // });
  //     this.onLoad();
  //   };
  // }

  // @HostListener('load') onLoad() {
  //   this._element.nativeElement.classList.remove("lazy");
  // }

}
