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

import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";

import { environment } from "../../environments/environment";
import { RootObject as Slides } from "../models/slide";

@Injectable({
  providedIn: "root",
})
export class HomeService {
  private uri: string = `${environment.api}/sliders`;

  constructor(private http: HttpClient) {}

  /**
   * Obtiene todos los slisdes desde el api
   * @return observable
   */
  getSlides(): Observable<Slides> {
    return this.http
      .get<Slides>(this.uri)
      .pipe(retry(2), catchError(this.handleError));
  }

  // Handle API errors
  handleError(response: HttpErrorResponse) {
    if (response.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("Ocurrió un error:", response.error.message);
    } else {
      // The backend returned an unsuccessful error code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `El servidor retornó un código ${response.status}, el error: ${response.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError("Sucedió algo malo; por favor intenta en un momento.");
  }
}
