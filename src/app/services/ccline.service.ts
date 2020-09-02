/**
 * ***************************************
 * Centro Cristiano de Loja Web
 * @author Jerson Morocho
 *
 * ---------------------------------------
 * - Creation (01-sep-2020)
 * ---------------------------------------
 */

import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError, Subscription, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { RootObject as Form } from 'src/app/models/cclineForm';

@Injectable({
  providedIn: 'root',
})
export class CclineService {
  private uri: string = `${environment.api}subscription`;

  constructor(private http: HttpClient) {}

  postSubscription(formData: Form): any {
    return this.http.post<Form>(this.uri, formData).pipe(catchError(this.handleError));
  }

  // Handle API errors
  handleError(response: HttpErrorResponse): Observable<never> {
    if (response.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('Ocurrió un error:', response.error.message);
    } else {
      // The backend returned an unsuccessful error code.
      // The response body may contain clues as to what went wrong,
      console.error(`El servidor retornó un código ${response.status}, ` + `el error: ${response.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Algo malo ocurrió; por favor intenta en unos momentos.');
  }
}
