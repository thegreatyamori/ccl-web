import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { DebugElement } from "@angular/core";
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";

import { MapModalComponent } from "./map-modal.component";

describe("MapModalComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MapModalComponent, FaIconComponent],
      imports: [ NgbModalModule ]
    }).compileComponents();
  }));

  describe(":", () => {
    let component: MapModalComponent;
    let fixture: ComponentFixture<MapModalComponent>;
    let debugEl: DebugElement;
    let element: HTMLElement;

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
      spyOn(component.modalService, 'open').and.callThrough();
      
      const openModalElem = element.querySelector('button');
      openModalElem.click();
      
      expect(component.modalService.open).toHaveBeenCalled();
    }));
  });
});
