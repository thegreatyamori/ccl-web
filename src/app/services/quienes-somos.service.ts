/**
 * ***************************************
 * Centro Cristiano de Loja Web
 * @author Jerson Morocho
 * 
 * ---------------------------------------
 * - Creation (9-nov-2019)
 * ---------------------------------------
 */

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

import { environment } from '../../environments/environment';
import { RootObject } from '../models/quienesSomos';

@Injectable({
  providedIn: 'root'
})
export class QuienesSomosService {

  uri: string = environment.api + '/E16KKMejD';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'applicaction/json'})
    // headers: new HttpHeaders({
    //   'Content-Type': 'applicaction/json',
    //   'Authorization': 'dafe5bd9145b232c549f157285194d7f'
    // })
  };

  constructor(private http: HttpClient) { }

  getPage(): Observable<RootObject> {
    return this.http.get<RootObject>(this.uri);
  }
}
