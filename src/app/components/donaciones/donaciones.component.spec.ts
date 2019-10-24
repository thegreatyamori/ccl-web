/**
 * ***************************************
 * Centro Cristiano de Loja Web
 * @author Jerson Morocho
 * 
 * ---------------------------------------
 * - Creation (29-sep-2019)
 * ---------------------------------------
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonacionesComponent } from './donaciones.component';

describe('DonacionesComponent', () => {
  let component: DonacionesComponent;
  let fixture: ComponentFixture<DonacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
