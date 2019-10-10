import { DebugElement } from "@angular/core";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { HomeComponent } from "./home.component";
import { ButtonsBarComponent } from "./buttons-bar/buttons-bar.component";
import { TowDahComponent } from './tow-dah/tow-dah.component';

describe("HomeComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, ButtonsBarComponent, FaIconComponent, TowDahComponent],
      imports: [ RouterTestingModule ]
    }).compileComponents();
  }));

  describe(":", () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;
    let debugEl: DebugElement;
    let element: HTMLElement;

    beforeEach(() => {
      fixture = TestBed.createComponent(HomeComponent);
      component = fixture.componentInstance;
      debugEl = fixture.debugElement;
      element = debugEl.nativeElement;
      fixture.detectChanges();
    });

    it("should create home", () => {
      expect(component).toBeTruthy();
    });

    it("should render ButtonsBarComponent", () => {
      fixture.detectChanges();
      expect(element.querySelector("app-buttons-bar")).toBeTruthy();
    });
  });
});
