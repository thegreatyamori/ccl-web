import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastoresComponent } from './pastores.component';

describe('PastoresComponent', () => {
  let component: PastoresComponent;
  let fixture: ComponentFixture<PastoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
