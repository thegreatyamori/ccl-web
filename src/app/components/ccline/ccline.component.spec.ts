import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CclineComponent } from './ccline.component';

describe('CclineComponent', () => {
  let component: CclineComponent;
  let fixture: ComponentFixture<CclineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CclineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CclineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
