import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-one',
  templateUrl: './modal-one.component.html',
  styleUrls: ['./modal-one.component.scss']
})
export class ModalOneComponent implements OnInit {

  constructor(
    private modal: NgbActiveModal
  ) { }

  ngOnInit() {

  }

  close(): void {
    this.modal.close('Close');
  }

  dismiss(): void {
    this.modal.dismiss('Dismiss');
  }
}
