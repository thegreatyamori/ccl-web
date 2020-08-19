/**
 * ***************************************
 * Centro Cristiano de Loja Web
 * @author Jerson Morocho
 *
 * ---------------------------------------
 * - Creation (7-oct-2019)
 * ---------------------------------------
 */

import { Component, OnInit, TemplateRef } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "modal-map",
  templateUrl: "./map.component.html",
  styles: [""]
})
export class MapComponent implements OnInit {
  constructor(public modalService: NgbModal) {}

  ngOnInit() {}

  /**
   * Recibe el ng-template a abrir
   * @param content TemplateRef
   */
  open(content: TemplateRef<any>): void {
    this.modalService.open(content, { size: "xl", centered: true });
  }
}
