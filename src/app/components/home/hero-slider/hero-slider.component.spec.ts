import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { NgbTooltipModule } from "@ng-bootstrap/ng-bootstrap";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { DebugElement } from "@angular/core";

import { HeroSliderComponent } from './hero-slider.component';

describe('HeroSliderComponent', () => {
  let component: HeroSliderComponent;
  let fixture: ComponentFixture<HeroSliderComponent>;
  let debugEl: DebugElement;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroSliderComponent, FaIconComponent ]
    })
    .compileComponents();
  }));

  describe(":", () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(HeroSliderComponent);
      component = fixture.componentInstance;
      debugEl = fixture.debugElement;
      component = debugEl.nativeElement;
      fixture.detectChanges();
    });

    it("should create hero-slider", () => {
      expect(component).toBeTruthy();
    });
  });
});
