/**
 * ***************************************
 * Centro Cristiano de Loja Web
 * @author Jerson Morocho
 * 
 * ---------------------------------------
 * - Creation (28-sep-2019)
 * - Added ButtonsBarComponent (6-oct-2019)
 * - Added TowDahComponent (24-oct-2019)
 * - Added HeroSliderComponent (24-oct-2019)
 * ---------------------------------------
 */

import { DebugElement } from "@angular/core";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { NgbCarousel } from "@ng-bootstrap/ng-bootstrap";
import { HttpClientModule } from "@angular/common/http";

import { HomeComponent } from "./home.component";
import { ButtonsBarComponent } from "./buttons-bar/buttons-bar.component";
import { TowDahComponent } from "./tow-dah/tow-dah.component";
import { HeroSliderComponent } from "./hero-slider/hero-slider.component";

describe("HomeComponent", () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let debugEl: DebugElement;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        ButtonsBarComponent,
        HeroSliderComponent,
        FaIconComponent,
        TowDahComponent,
        NgbCarousel
      ],
      imports: [ RouterTestingModule, HttpClientModule ]
    }).compileComponents();
  }));
  
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

  it("should render HeroSliderComponent", () => {
    fixture.detectChanges();
    expect(element.querySelector("app-hero-slider")).toBeTruthy();
  });

  it("should render ButtonsBarComponent", () => {
    fixture.detectChanges();
    expect(element.querySelector("app-buttons-bar")).toBeTruthy();
  });

  it("should render TowDahComponent", () => {
    fixture.detectChanges();
    expect(element.querySelector("app-tow-dah")).toBeTruthy();
  });
});
