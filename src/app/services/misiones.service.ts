/**
 * ***************************************
 * Centro Cristiano de Loja Web
 * @author Jerson Morocho
 *
 * ---------------------------------------
 * - Creation (9-nov-2019)
 * - Modified uri + headers (17-nov-2019)
 * - Modified uri + params (9-jul-2020)
 * ---------------------------------------
 */

import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpParams,
  HttpErrorResponse,
} from "@angular/common/http";
import { Subscription, ReplaySubject, throwError } from "rxjs";
import { Misiones } from "../models/misiones";
import { environment } from "src/environments/environment";
import { retry, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class MisionesService {
  private url: string = `${environment.api}/misiones`;
  private _dataCB: ReplaySubject<any> = new ReplaySubject<any>();
  private _dataOB: ReplaySubject<any> = new ReplaySubject<any>();
  private _dataT: ReplaySubject<any> = new ReplaySubject<any>();

  dataCB$ = this._dataCB.asObservable();
  dataOB$ = this._dataOB.asObservable();
  dataT$ = this._dataT.asObservable();

  constructor(private http: HttpClient) {
    this.getCamposBlancos();
    this.getFiliales();
    this.getTransculturales();
  }

  /**
   * Obtiene una lista de campos blancos del API
   * @returns Una subscripcion al ReplaySubject
   */
  private getCamposBlancos(): Subscription {
    return this.http
      .get<Misiones>(`${this.url}/l/cb`)
      .pipe(retry(2), catchError(this.handleError))
      .subscribe((data: Misiones) => this._dataCB.next(data));
  }

  /**
   * Obtiene una lista de campos blancos del API
   * @returns Una subscripcion al ReplaySubject
   */
  private getFiliales(): Subscription {
    return this.http
      .get<Misiones>(`${this.url}/l/of`)
      .pipe(retry(2), catchError(this.handleError))
      .subscribe((data: Misiones) => this._dataOB.next(data));
  }

  /**
   * Obtiene una lista de campos blancos del API
   * @returns Una subscripcion al ReplaySubject
   */
  private getTransculturales(): Subscription {
    return this.http
      .get<Misiones>(`${this.url}/t`)
      .pipe(retry(2), catchError(this.handleError))
      .subscribe((data: Misiones) => this._dataT.next(data));
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
    return throwError("Algo malo ocurrió; por favor intenta en unos momentos.");
  }
}
