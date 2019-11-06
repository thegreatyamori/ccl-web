/**
 * ***************************************
 * Centro Cristiano de Loja Web
 * @author Jerson Morocho
 * 
 * ---------------------------------------
 * - Creation (23-oct-2019)
 * - Added Slide Interface (27-oct-2019)
 * ---------------------------------------
 */

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

import { environment } from '../../environments/environment';
import { Slide } from '../models/slide';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  uri: string = environment.api + '/4JaGs05cw';
  // uri: string = environment.api + '/slider.php';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'applicaction/json'})
    // headers: new HttpHeaders({
    //   'Content-Type': 'applicaction/json',
    //   'Authorization': 'dafe5bd9145b232c549f157285194d7f'
    // })
  };
  
  constructor(private http: HttpClient) { }

  getSlides(): Observable<Slide[]> {
    return this.http.get<Slide[]>(this.uri);
  }

}