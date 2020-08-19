import { Directive, ElementRef, HostListener, Input } from "@angular/core";
import { BottomSheetService } from "./card-v2.service";

@Directive({
  selector: "[swipe]"
})
export class SwipeDirective {
  swipeCoord: number[];
  swipeTime: number;
  swipeDuration: number;

  // @Input("swipe") swipe: String;

  constructor(private el: ElementRef, private bottomSheet: BottomSheetService) {
    // duration in ms
    this.swipeDuration = 500;
  }

  @HostListener("touchstart", ["$event"])
  @HostListener("touchend", ["$event"])
  @HostListener("touchcancel", ["$event"])
  handleTouch(e: TouchEvent): void {
    const [coordX, coordY]: [number, number] = [
      e.changedTouches[0].clientX,
      e.changedTouches[0].clientY
    ];
    const time = new Date().getTime();

    if (e.type === "touchstart") {
      this.swipeCoord = [coordX, coordY];
      this.swipeTime = time;
    } else if (e.type === "touchend") {
      const [horizontal, vertical] = [
        coordX - this.swipeCoord[0],
        coordY - this.swipeCoord[1]
      ];
      const duration = time - this.swipeTime;

      if (duration < this.swipeDuration) {
        // swipe vertical con 60px de rango
        if (Math.abs(vertical) > 60) {
          if (vertical < 0) this.swipeUp();
          else this.swipeDown();
        }

        // swipe horizontal con 60px de rango
        if (Math.abs(horizontal) > 60) {
          if (horizontal < 0) this.swipeLeft();
          else this.swipeRight();
        }
      }
    }
  }

  swipeUp() {}
  swipeDown() {
    // this.bottomSheet.close();
  }
  swipeLeft() {}
  swipeRight() {}
}
