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
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { RootObject as HDBs, LightHDB, HDB } from "src/app/models/hdb";
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class HdbService {
  uri: string = environment.api + "hdb.php";

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get<HDBs>(this.uri).pipe(
      map(data => data.res.map(hdb => this.formatHDB(hdb))),
    );
  }

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
    hdb.name = item.typeHDB === 'matrimonios' ?
      `${item.firstName} & ${item.surName}` :
      `${item.firstName} ${item.surName}`;
    hdb.image = item.image === null ?
      'assets/img/logo.png' : item.image;
    hdb.color = item.typeHDB === 'jovenes' ? '#01087C'
      : item.typeHDB === 'damas' ? '#015E7C'
      : item.typeHDB === 'caballeros' ? '#4D017C' : '#017C1C';

    return hdb;
  }

  filterByType() {}
  filterBySector() {}
  filterbyDay() {}
}
