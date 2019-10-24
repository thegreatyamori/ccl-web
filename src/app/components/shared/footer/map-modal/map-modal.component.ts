import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-map-modal',
  templateUrl: './map-modal.component.html',
  styles: []
})
export class MapModalComponent implements OnInit {

  constructor(public modalService: NgbModal) {}

  ngOnInit() {}

  open(content: any) {
    this.modalService.open(content, { size: 'xl', centered: true });
  }
}
