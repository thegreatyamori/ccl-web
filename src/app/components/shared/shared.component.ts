/**
 * ***************************************
 * Centro Cristiano de Loja Web
 * @author Jerson Morocho
 *
 * ---------------------------------------
 * - Creation (25-ene-2020)
 * ---------------------------------------
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared',
  template: `
    <radio-mini left="10" bottom="10"></radio-mini>
    <stream></stream>
  `,
})
export class SharedComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
