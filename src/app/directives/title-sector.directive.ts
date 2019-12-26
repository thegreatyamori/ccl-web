/**
 * ***************************************
 * Centro Cristiano de Loja Web
 * @author Jerson Morocho
 * 
 * ---------------------------------------
 * - Creation (10-dec-2019)
 * ---------------------------------------
 */

import { Directive, Renderer2, HostListener, ElementRef, Input, } from '@angular/core';

@Directive({
  selector: "[titleHover]"
})
export class TitleSectorDirective {
  constructor(private path: ElementRef, private renderer: Renderer2) {}

  @Input("titleHover") tooltip: any;

  @HostListener("mouseenter")
  setTitle() {
    const id = this.path.nativeElement.id;
    const titleSector = id.split('_').join(' ');
    const text = this.renderer.createText(titleSector);
    
    if (this.tooltip.firstChild)
      this.renderer.removeChild(this.tooltip, this.tooltip.firstChild);
    this.renderer.appendChild(this.tooltip, text);
    this.renderer.removeClass(this.tooltip, "d-none");
  }
  
  @HostListener('mouseleave')
  removeTitle() {
    this.renderer.addClass(this.tooltip, 'd-none');
  }
}