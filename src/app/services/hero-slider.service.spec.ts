import { TestBed, inject, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { of } from 'rxjs';

import { HeroSliderService } from './hero-slider.service';
import { HttpErrorResponse } from '@angular/common/http';

describe('HeroSliderService', () => {
  let service: HeroSliderService;
  let httpClientSpy: { get: jasmine.Spy };
  const mockResponse = [
    {
      "title": "Inkerman",
      "subtitle": "Russian Federation",
      "image": "http://placekitten.com/1440/960",
      "imageSmall": "http://placekitten.com/375/700",
      "imageMedium": "http://placekitten.com/800/1000",
      "link": "http://placehold.it/1440x960.jpg"
    },
    {
      "title": "Summerset",
      "subtitle": "Slovenia",
      "image": "http://placekitten.com/1440/960",
      "imageSmall": "http://placekitten.com/375/700",
      "imageMedium": "http://placekitten.com/800/1000",
      "link": "http://placehold.it/1440x960.jpg"
    },
    {
      "title": "Walker",
      "subtitle": "Andorra",
      "image": "http://placekitten.com/1440/960",
      "imageSmall": "http://placekitten.com/375/700",
      "imageMedium": "http://placekitten.com/800/1000",
      "link": "http://placehold.it/1440x960.jpg"
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HeroSliderService]
    });

    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new HeroSliderService(<any> httpClientSpy);
  });

  it('should be created', () => {
    service = TestBed.get(HeroSliderService);
    expect(service).toBeTruthy();
  });

  // it('should get Slides', inject(
  //     [HttpTestingController, HeroSliderService],
  //     (httpMock: HttpTestingController, hsTested: HeroSliderService) => {
  //       const url = 'https://next.json-generator.com/api/json/get/E1VzxwtYv';
  //       hsTested.getSlides().subscribe(res => {
  //         expect(res).toEqual(mockResponse);
  //       });
        
  //       const req = httpMock.expectOne(url);
  //       expect(req.request.method).toBe('GET');
  //       req.flush(mockResponse);
  //     })
  // );

  it('should return expected slides (HttpClient called once)', () => {
    httpClientSpy.get.and.returnValue(of(mockResponse));
  
    service.getSlides().subscribe(
      slides => expect(slides).toEqual(mockResponse, 'expected slides'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  // it('should return an error when the server returns a 404', () => {
  //   const errorResponse = new HttpErrorResponse({
  //     error: 'test 404 error',
  //     status: 404, statusText: 'Not Found'
  //   });
  
  //   httpClientSpy.get.and.returnValue(of(errorResponse));
  
  //   service.getSlides().subscribe(
  //     slides => fail('expected an error, not slides'),
  //     error  => expect(error.message).toContain('test 404 error')
  //   );
  // });
});
