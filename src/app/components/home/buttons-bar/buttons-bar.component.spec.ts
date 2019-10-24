import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { DebugElement } from "@angular/core";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { RouterTestingModule } from "@angular/router/testing";

import { ButtonsBarComponent } from "./buttons-bar.component";

describe("ButtonsBarComponent", () => {
  let fixture: ComponentFixture<ButtonsBarComponent>;
  let component: ButtonsBarComponent;
  let debugEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonsBarComponent, FaIconComponent],
      imports: [RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsBarComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    fixture.detectChanges();
  });

  it("should create Buttons Bar", () => {
    expect(component).toBeTruthy();
  });

  it('should have as navImage "bg-buttons-bar.svg"', () => {
    expect(component.navImage).toEqual("assets/img/home/bg-buttons-bar.svg");
  });

  it('should have as navCalendarImage "card-calendar.jpg"', () => {
    expect(component.navCalendarImage).toEqual(
      "assets/img/home/card-calendar.jpg"
    );
  });

  it('should have as navDonationsImage "card-donations.jpg"', () => {
    expect(component.navDonationsImage).toEqual(
      "assets/img/home/card-donations.jpg"
    );
  });

  it('should have as navHDBImage "card-hdb.jpg"', () => {
    expect(component.navHDBImage).toEqual("assets/img/home/card-hdb.jpg");
  });

  it('should have as textCaledar "Calendario"', () => {
    expect(component.textCaledar).toEqual("Calendario");
  });

  it('should have as textDonations "Donaciones"', () => {
    expect(component.textDonations).toEqual("Donaciones");
  });

  it('should have as textHDB "Hogares de Bendición"', () => {
    expect(component.textHDB).toEqual("Hogares de Bendición");
  });
});
