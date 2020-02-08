/**
 * ***************************************
 * Centro Cristiano de Loja Web
 * @author Jerson Morocho
 *
 * ---------------------------------------
 * - Creation (26-ene-2020)
 * ---------------------------------------
 */

import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError, ReplaySubject, Subscription } from "rxjs";
import { retry, catchError } from "rxjs/operators";

import { environment } from "../../environments/environment";
import { RootObject as Pastores } from "../models/pastores";

@Injectable({
  providedIn: "root"
})
export class PastoresService {
  private uri: string = environment.api + "pastores.php";
  private _data: ReplaySubject<any> = new ReplaySubject<any>();
  data$ = this._data.asObservable();

  constructor(private http: HttpClient) {
    this.getPastores();
  }

  /**
   * Obtiene una lista de pastores del API
   * @returns Observable<Pastores>
   */
  private getPastores(): Subscription {
    return this.http
      .get<Pastores>(this.uri)
      .pipe(retry(2), catchError(this.handleError))
      .subscribe((data: Pastores) => this._data.next(data));
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
