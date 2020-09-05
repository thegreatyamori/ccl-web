/**
 * ***************************************
 * Centro Cristiano de Loja Web
 * @author Jerson Morocho
 *
 * ---------------------------------------
 * - Creation (01-sep-2020)
 * ---------------------------------------
 */

import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss'],
})
export class TermsComponent implements OnInit {
  @Input() title: String;

  constructor(public modalService: NgbModal) {}

  ngOnInit(): void {}

  /**
   * Recibe el ng-template a abrir
   * @param content TemplateRef
   */
  open(content: TemplateRef<any>): void {
    this.modalService.open(content, { size: 'xl', centered: true });
  }
}
