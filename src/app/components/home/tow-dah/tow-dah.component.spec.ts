/**
 * ***************************************
 * Centro Cristiano de Loja Web
 * @author Jerson Morocho
 * 
 * ---------------------------------------
 * - Creation (10-oct-2019)
 * ---------------------------------------
 */

import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { NgbTooltipModule } from "@ng-bootstrap/ng-bootstrap";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { DebugElement } from "@angular/core";

import { TowDahComponent } from "./tow-dah.component";

describe("TowDahComponent", () => {
  let component: TowDahComponent;
  let fixture: ComponentFixture<TowDahComponent>;
  let debugEl: DebugElement;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TowDahComponent, FaIconComponent ],
      imports: [NgbTooltipModule]
    }).compileComponents();
  }));

  describe(":", () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(TowDahComponent);
      component = fixture.componentInstance;
      debugEl = fixture.debugElement;
      component = debugEl.nativeElement;
      fixture.detectChanges();
    });

    it("should create tow-dah", () => {
      expect(component).toBeTruthy();
    });
  });
});
