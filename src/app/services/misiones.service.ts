import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpParams,
  HttpErrorResponse
} from "@angular/common/http";
import { Subscription, ReplaySubject, throwError } from "rxjs";
import { Misiones } from "../models/misiones";
import { environment } from "src/environments/environment";
import { retry, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class MisionesService {
  private url: string = environment.api + "misiones.php";
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
    const options = {
      params: new HttpParams().set("tipo", "l").set("class", "cb")
    };
    return this.http
      .get<Misiones>(this.url, options)
      .pipe(retry(2), catchError(this.handleError))
      .subscribe((data: Misiones) => this._dataCB.next(data));
  }

  /**
   * Obtiene una lista de campos blancos del API
   * @returns Una subscripcion al ReplaySubject
   */
  private getFiliales(): Subscription {
    const options = {
      params: new HttpParams().set("tipo", "l").set("class", "of")
    };
    return this.http
      .get<Misiones>(this.url, options)
      .pipe(retry(2), catchError(this.handleError))
      .subscribe((data: Misiones) => this._dataOB.next(data));
  }

  /**
   * Obtiene una lista de campos blancos del API
   * @returns Una subscripcion al ReplaySubject
   */
  private getTransculturales(): Subscription {
    const options = {
      params: new HttpParams().set("tipo", "t")
    };
    return this.http
      .get<Misiones>(this.url, options)
      .pipe(retry(2), catchError(this.handleError))
      .subscribe((data: Misiones) => this._dataT.next(data));
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
