/**
 * ***************************************
 * Centro Cristiano de Loja Web
 * @author Jerson Morocho
 *
 * ---------------------------------------
 * - Creation (9-sep-2019)
 * - Test (7-oct-2019)
 * ---------------------------------------
 */

import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";

import { FooterComponent } from "./footer.component";
import { MapModalComponent } from "../../shared/footer/map-modal/map-modal.component";

describe("FooterComponent", () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent, FaIconComponent, MapModalComponent],
      imports: [RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create footer", () => {
    expect(component).toBeTruthy();
  });
});
