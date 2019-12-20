/**
 * ***************************************
 * Centro Cristiano de Loja Web
 * @author Jerson Morocho
 * 
 * ---------------------------------------
 * - Creation (17-dec-2019)
 * ---------------------------------------
 */

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { RootObject as HDBs, LightHDB, HDB } from "src/app/models/hdb";
import { Observable, throwError } from "rxjs";
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class HdbService {
  uri: string = environment.api + "hdb.php";

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
  private sortByType(a: HDB, b: HDB) {
    if (a.typeHDB < b.typeHDB) return -1;
    if (a.typeHDB > b.typeHDB) return 1;
    return 0;
  }

  /**
   * formatea un elemento de tipo HDB
   * @param item HDB element
   */
  private formatHDB(item: HDB) {
    let hdb = <LightHDB>{};
    hdb.typeHDB = item.typeHDB;
    hdb.day = item.day;
    hdb.hour = item.hour;
    hdb.place = item.place;
    hdb.reference = item.reference;
    hdb.posX = item.posX;
    hdb.posY = item.posY;
    hdb.telephone = item.telephone;
    hdb.alternative = item.alternative;
    hdb.name =
      item.typeHDB === "matrimonios"
        ? `${item.firstName} & ${item.surName}`
        : `${item.firstName} ${item.surName}`;
    hdb.image = item.image === null ? "assets/img/logo.png" : item.image;
    hdb.color =
      item.typeHDB === "jovenes"
        ? "#C56060"
        : item.typeHDB === "damas"
        ? "#8660C5"
        : item.typeHDB === "caballeros"
        ? "#383838"
        : "#607CC5";

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
