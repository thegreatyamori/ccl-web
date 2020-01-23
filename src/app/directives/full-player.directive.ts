import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: "[fullPlayer]"
})
export class FullPlayerDirective implements OnChanges {
  @Input() fullPlayer: boolean;

  constructor(private player: ElementRef) {}

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      if (propName === "fullPlayer") {
        if (this.fullPlayer) this.player.nativeElement.play();
        else this.player.nativeElement.pause();
      }
    }
  }
}
