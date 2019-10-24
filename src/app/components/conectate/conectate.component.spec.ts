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

import { ConectateComponent } from './conectate.component';

describe('ConectateComponent', () => {
  let component: ConectateComponent;
  let fixture: ComponentFixture<ConectateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConectateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConectateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
