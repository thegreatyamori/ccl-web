import { Location } from "@angular/common";
import { Component, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { ModalComponent } from "./modal.component";
import { NgbModal, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "modal-container",
  template: ""
})
export class ModalContainerComponent implements OnDestroy {
  destroy = new Subject<any>();
  currentDialog: NgbModalRef = null;

  constructor(
    private modalService: NgbModal,
    route: ActivatedRoute,
    location: Location
  ) {
    route.params.pipe(takeUntil(this.destroy)).subscribe(params => {
      // When router navigates on this component is takes the params and opens up the photo detail modal
      this.currentDialog = this.modalService.open(ModalComponent, {
        size: "xl",
        centered: true
      });
      this.currentDialog.componentInstance.mision = params.name;

      // Go back to home page after the modal is closed
      this.currentDialog.result.then(
        result => location.back(),
        reason => location.back()
      );
    });
  }

  ngOnDestroy() {
    this.destroy.next();
  }
}
