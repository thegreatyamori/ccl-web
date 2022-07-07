/**
 * ***************************************
 * Centro Cristiano de Loja Web
 * @author Jerson Morocho
 *
 * ---------------------------------------
 * - Creation (23-oct-2019)
 * - Added Slide Interface (27-oct-2019)
 * - Modified uri + headers (17-nov-2019)
 * - Modified uri (9-jul-2020)
 * ---------------------------------------
 */

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { RootObject as Slides } from '../models/slide';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private uri: string = `${environment.api}sliders`;

  constructor(private http: HttpClient) {}

  /**
   * Obtiene todos los slisdes desde el api
   * @return observable
   */
  getSlides(): Observable<Slides> {
    const hardcoded_banner = [
      {
        status: true,
        res: [
          {
            id: 1,
            title: 'Congreso Pureza 2022',
            subtitle: 'Enamorarte es la parte sencilla',
            image: 'https://lh6.googleusercontent.com/_QyvzmXsJevLyK-AqjHGNUYuw5AfSGuNQTie___sLmvzz7aKZIxXpHn6yIPXQRBKFJ6mjuS3Jybdh1iK1TnAdcHHxNzkFNRK5cT6PRj0q0A66VEEB5cStNm6pK7EUqBgwA=w1280',
            link: 'https://forms.gle/U9466jLpXLu9S16J6'
          },
          {
            id: 2,
            title: 'Oración',
            subtitle: 'Buscando su presencia',
            image: 'assets/img/slides/oracion.jpeg',
            link: 'https://us02web.zoom.us/j/83914386780?pwd=WUFIL2RlRXZZTjd2TjFYS0tiNVBuZz09'
          },
          {
            id: 3,
            title: 'Adoración',
            subtitle: 'Martes y Jueves',
            image: 'assets/img/slides/adoracion.jpeg',
            link: ''
          },
        ]
      }
    ]
    const obs_hardcoded_banner: Observable<Slides> = new Observable((observer) => {
      observer.next(hardcoded_banner);
      observer.complete();
    })
    return obs_hardcoded_banner
    // return this.http.get<Slides>(this.uri).pipe(retry(2), catchError(this.handleError));
  }

  // Handle API errors
  handleError(response: HttpErrorResponse) {
    if (response.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('Ocurrió un error:', response.error.message);
    } else {
      // The backend returned an unsuccessful error code.
      // The response body may contain clues as to what went wrong,
      console.error(`El servidor retornó un código ${response.status}, el error: ${response.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Sucedió algo malo; por favor intenta en un momento.');
  }
}
