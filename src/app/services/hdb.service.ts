/**
 * ***************************************
 * Centro Cristiano de Loja Web
 * @author Jerson Morocho
 *
 * ---------------------------------------
 * - Creation (17-dec-2019)
 * ---------------------------------------
 */

import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

import { environment } from "src/environments/environment";
import { RootObject as HDBs, LightHDB, HDB } from "src/app/models/hdb";
import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { Settings } from 'src/config/config';

@Injectable({
  providedIn: "root"
})
export class HdbService {
  private uri: string = environment.api + "hdb.php";
  private baseTheme = Settings.base_theme;

  constructor(private http: HttpClient) {}

  /**
   * Obtiene todos los hogares de bendición desde el api
   * @return observable
   */
  getAll(): Observable<any> {
    return this.http.get<HDBs>(this.uri).pipe(
      // ordena alfabeticamente el array segun el typeHDB
      map(data => data.res.sort(this.sortByType)),

      // Convierte cada elemento de tipo HDB a LightHDB
      map(hdbs => hdbs.map(hdb => this.formatHDB(hdb))),

      // Despliega un error console si falla la petcion get
      catchError(this.handleError)
    );
  }

  /**
   * Ordena todos los elementos de un array alfabeticamente
   * @param a element A
   * @param b element B
   */
  private sortByType(a: HDB, b: HDB): number {
    if (a.typeHDB < b.typeHDB) return -1;
    if (a.typeHDB > b.typeHDB) return 1;
    return 0;
  }

  /**
   * formatea un elemento de tipo HDB
   * @param item HDB element
   */
  private formatHDB(item: HDB) {
    const { id, isActive, firstName, surName, ...light }: HDB = item;
    let hdb = <LightHDB>{ ...light };

    hdb.name =
      hdb.typeHDB === "matrimonios"
        ? `${firstName} & ${surName}`
        : `${firstName} ${surName}`;
    hdb.image = hdb.image || "assets/img/logo.png";
    if (hdb.typeHDB === "jovenes") hdb.color = this.baseTheme.colors.jovenes;
    if (hdb.typeHDB === "damas") hdb.color = this.baseTheme.colors.damas;
    if (hdb.typeHDB === "caballeros") hdb.color = this.baseTheme.colors.caballeros;
    if (hdb.typeHDB === "matrimonios") hdb.color = this.baseTheme.colors.matrimonios;

    return hdb;
  }

  /** */
  filterByType() {}
  /** */
  filterBySector() {}
  /** */
  filterbyDay() {}

  /**
   * Handle API errors
   * @param error
   */
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
