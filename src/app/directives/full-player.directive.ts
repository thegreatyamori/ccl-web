import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[fullPlayer]',
})
export class FullPlayerDirective implements OnChanges {
  @Input() fullPlayer: boolean;

  constructor(private player: ElementRef) {}

  /**
   * detecta cualquier cambio en el target element y
   * permite alternar entre play/pause
   * @param changes SimpleChanges
   */
  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      if (propName === 'fullPlayer') {
        if (this.fullPlayer) this.player.nativeElement.play();
        else this.player.nativeElement.pause();
      }
    }
  }
}
