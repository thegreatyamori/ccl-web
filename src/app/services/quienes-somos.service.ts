/**
 * ***************************************
 * Centro Cristiano de Loja Web
 * @author Jerson Morocho
 * 
 * ---------------------------------------
 * - Creation (9-nov-2019)
 * - Modified uri + headers (17-nov-2019)
 * ---------------------------------------
 */

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { RootObject as Pages } from '../models/quienesSomos';

@Injectable({
  providedIn: "root"
})
export class QuienesSomosService {
  private uri: string = environment.api + "quienes-somos.php";

  constructor(private http: HttpClient) {}

  /**
   * Obtiene una lista de información sobre el CCL del API
   * @returns Observable<Pages>
   */
  getPage(): Observable<Pages> {
    return this.http
      .get<Pages>(this.uri)
      .pipe(retry(2), catchError(this.handleError));
  }

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError("Something bad happened; please try again later.");
  }
}
