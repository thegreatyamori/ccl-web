/**
 * ***************************************
 * Centro Cristiano de Loja Web
 * @author Jerson Morocho
 * 
 * ---------------------------------------
 * - Creation (23-oct-2019)
 * ---------------------------------------
 */

import { TestBed, inject, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { of } from 'rxjs';

import { HomeService } from './home.service';
import { HttpErrorResponse } from '@angular/common/http';

describe('HomeService', () => {
  let service: HomeService;
  let httpClientSpy: { get: jasmine.Spy };
  const mockResponse = [
    {
      "title": "Nanafalia",
      "subtitle": "Greenland",
      "image": "https://loremflickr.com/1440/960",
      "imageThumb": "https://loremflickr.com/14/9",
      "imageSmall": "https://loremflickr.com/576/800",
      "imageSmallThumb": "https://loremflickr.com/17/24",
      "imageMedium": "https://loremflickr.com/840/1000",
      "imageMediumThumb": "https://loremflickr.com/17/20",
      "link": "http://placehold.it/1440x960.jpg"
    },
    {
      "title": "Boyd",
      "subtitle": "Cote D'Ivoire (Ivory Coast)",
      "image": "https://loremflickr.com/1440/960",
      "imageThumb": "https://loremflickr.com/14/9",
      "imageSmall": "https://loremflickr.com/576/800",
      "imageSmallThumb": "https://loremflickr.com/17/24",
      "imageMedium": "https://loremflickr.com/840/1000",
      "imageMediumThumb": "https://loremflickr.com/17/20",
      "link": "http://placehold.it/1440x960.jpg"
    },
    {
      "title": "Romeville",
      "subtitle": "France",
      "image": "https://loremflickr.com/1440/960",
      "imageThumb": "https://loremflickr.com/14/9",
      "imageSmall": "https://loremflickr.com/576/800",
      "imageSmallThumb": "https://loremflickr.com/17/24",
      "imageMedium": "https://loremflickr.com/840/1000",
      "imageMediumThumb": "https://loremflickr.com/17/20",
      "link": "http://placehold.it/1440x960.jpg"
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HomeService]
    });

    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new HomeService(<any> httpClientSpy);
  });

  it('should be created', () => {
    service = TestBed.get(HomeService);
    expect(service).toBeTruthy();
  });

  // it('should get Slides', inject(
  //     [HttpTestingController, HomeService],
  //     (httpMock: HttpTestingController, hsTested: HomeService) => {
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
