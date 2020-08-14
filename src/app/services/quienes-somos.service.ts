/**
 * ***************************************
 * Centro Cristiano de Loja Web
 * @author Jerson Morocho
 *
 * ---------------------------------------
 * - Creation (9-nov-2019)
 * - Modified uri + headers (17-nov-2019)
 * - Modified uri (9-jul-2020)
 * ---------------------------------------
 */

import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { throwError, ReplaySubject } from "rxjs";
import { retry, catchError } from "rxjs/operators";

import { environment } from "../../environments/environment";
import { RootObject as Pages } from "../models/quienesSomos";

@Injectable({
  providedIn: 'root'
})
export class QuienesSomosService {
  private uri: string = `${environment.api}quienes-somos`;
  private _data: ReplaySubject<any> = new ReplaySubject<any>();
  data$ = this._data.asObservable();

  constructor(private http: HttpClient) {
    this.getPage();
  }

  /**
   * Obtiene una lista de información sobre el CCL del API
   * @returns Observable<Pages>
   */
  private getPage() {
    return this.http
      .get<Pages>(this.uri)
      .pipe(retry(2), catchError(this.handleError))
      .subscribe((data: Pages) => this._data.next(data));
  }

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("Ocurrió un error:", error.error.message);
    } else {
      // The backend returned an unsuccessful error code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `El servidor retornó un código ${error.status}, ` + `el error: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError("Algo malo ocurrió; por favor intenta en unos momentos.");
  }
}
