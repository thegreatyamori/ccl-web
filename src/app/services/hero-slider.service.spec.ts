import { TestBed } from '@angular/core/testing';

import { HeroSliderService } from './hero-slider.service';

describe('HeroSliderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeroSliderService = TestBed.get(HeroSliderService);
    expect(service).toBeTruthy();
  });
});
