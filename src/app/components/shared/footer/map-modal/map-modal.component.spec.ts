/**
 * ***************************************
 * Centro Cristiano de Loja Web
 * @author Jerson Morocho
 * 
 * ---------------------------------------
 * - Creation (7-oct-2019)
 * ---------------------------------------
 */

import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { DebugElement } from "@angular/core";
import { NgbModalModule } from "@ng-bootstrap/ng-bootstrap";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";

import { MapModalComponent } from "./map-modal.component";

describe("MapModalComponent", () => {
  let component: MapModalComponent;
  let fixture: ComponentFixture<MapModalComponent>;
  let debugEl: DebugElement;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MapModalComponent, FaIconComponent],
      imports: [NgbModalModule]
    }).compileComponents();
  }));
  
  beforeEach(() => {
    fixture = TestBed.createComponent(MapModalComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    element = debugEl.nativeElement;
    fixture.detectChanges();
  });

  it("should create map-modal", () => {
    expect(component).toBeTruthy();
  });

  it("should click open button", async(() => {
    spyOn(component.modalService, "open").and.callThrough();

    const openModalElem = element.querySelector("button");
    openModalElem.click();

    expect(component.modalService.open).toHaveBeenCalled();
  }));
});
