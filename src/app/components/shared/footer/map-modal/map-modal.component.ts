import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-map-modal',
  templateUrl: './map-modal.component.html',
  styleUrls: ['./map-modal.component.scss']
})
export class MapModalComponent implements OnInit {
  closeResult: string;

  constructor(public modalService: NgbModal) {}

  ngOnInit() {}

  open(content: any) {
    this.modalService.open(content, {backdropClass: 'darkest-backdrop', size: 'xl', centered: true});
  }
}
