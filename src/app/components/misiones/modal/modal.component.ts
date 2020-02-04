/**
 * ***************************************
 * Centro Cristiano de Loja Web
 * @author Jerson Morocho
 *
 * ---------------------------------------
 * - Creation (2-feb-2020)
 * ---------------------------------------
 */

import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Mision } from 'src/app/models/misiones';

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"]
})
export class ModalComponent implements OnInit {
  @Input() data: Mision;
  mision: Mision;

  constructor(public modalService: NgbModal) {}

  ngOnInit() {
    this.mision = this.data;
  }

  /**
   * Recibe el ng-template a abrir
   * @param content TemplateRef
   */
  open(content: TemplateRef<any>): void {
    this.modalService.open(content, { size: "xl", centered: true });
  }
}
