import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbTabset, NgbTab } from '@ng-bootstrap/ng-bootstrap';
import { DebugElement } from '@angular/core';

import { QuienesSomosComponent } from './quienes-somos.component';
import { By } from '@angular/platform-browser';

describe('QuienesSomosComponent', () => {
  let component: QuienesSomosComponent;
  let fixture: ComponentFixture<QuienesSomosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QuienesSomosComponent, NgbTabset, NgbTab],
    }).compileComponents();
  }));

  describe(':', () => {
    let fixture: ComponentFixture<QuienesSomosComponent>;
    let component: QuienesSomosComponent;
    let debugEl: DebugElement;
    let element: HTMLElement;

    beforeEach(() => {
      fixture = TestBed.createComponent(QuienesSomosComponent);
      component = fixture.componentInstance;
      debugEl = fixture.debugElement;
      element = debugEl.nativeElement;
      fixture.detectChanges();
    });

    it('should create component', () => {
      expect(component).toBeTruthy();
    });

    it('should have as title "Reseña Histórica"', () => {
      expect(component.titleTab).toEqual('Reseña Histórica');
    });

    it('should render title', () => {
      fixture.detectChanges();
      expect(element.querySelector('.section h2').textContent).toContain('Reseña Histórica');
    });

    it('should render headerImg', () => {
      fixture.detectChanges();
      expect(element.querySelector('.parallax-img').getAttribute('src')).toContain(
        'assets/img/quienes-somos/header.jpg'
      );
    });

    it('should change to "tabResena"', async(() => {
      fixture.detectChanges();

      const tabChange = debugEl.query(By.directive(NgbTabset));
      tabChange.triggerEventHandler('tabChange', { nextId: 'tabResena' });

      fixture.detectChanges();

      expect(debugEl.query(By.css('h2')).nativeElement.innerText).toEqual('Reseña Histórica');
    }));

    it('should change to "tabMision"', () => {
      fixture.detectChanges();

      const tabMision = debugEl.query(By.directive(NgbTabset));
      tabMision.triggerEventHandler('tabChange', { nextId: 'tabMision' });

      fixture.detectChanges();

      expect(debugEl.query(By.css('h2')).nativeElement.innerText).toEqual('Misión');
    });

    it('should change to "tabVision"', () => {
      fixture.detectChanges();

      const tabVision = debugEl.query(By.directive(NgbTabset));
      tabVision.triggerEventHandler('tabChange', { nextId: 'tabVision' });

      fixture.detectChanges();

      expect(debugEl.query(By.css('h2')).nativeElement.innerText).toEqual('Visión');
    });

    it('should change to "tabValores"', () => {
      fixture.detectChanges();

      const tabValores = debugEl.query(By.directive(NgbTabset));
      tabValores.triggerEventHandler('tabChange', { nextId: 'tabValores' });

      fixture.detectChanges();

      expect(debugEl.query(By.css('h2')).nativeElement.innerText).toEqual('Valores');
    });
  });
});
