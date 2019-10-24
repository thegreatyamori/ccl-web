import { async, ComponentFixture, TestBed, inject } from "@angular/core/testing";
import { NgbCarousel } from "@ng-bootstrap/ng-bootstrap";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { DebugElement } from "@angular/core";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientModule } from "@angular/common/http";

import { HeroSliderComponent } from "./hero-slider.component";
import { Slide } from 'src/app/models/slide';
import { HeroSliderService } from 'src/app/services/hero-slider.service';

describe("HeroSliderComponent", () => {
  let component: HeroSliderComponent;
  let fixture: ComponentFixture<HeroSliderComponent>;
  let debugEl: DebugElement;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroSliderComponent, FaIconComponent, NgbCarousel ],
      imports: [ RouterTestingModule, HttpClientModule ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSliderComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    element = debugEl.nativeElement;
    fixture.detectChanges();
  });

  it("should create hero-slider", () => {
    expect(component).toBeTruthy();
  });
});
