import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpoPastoralComponent } from './cuerpo-pastoral.component';

describe('CuerpoPastoralComponent', () => {
  let component: CuerpoPastoralComponent;
  let fixture: ComponentFixture<CuerpoPastoralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuerpoPastoralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuerpoPastoralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
