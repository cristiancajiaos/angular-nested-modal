import { ModalOneComponent } from './../shared/modal-one/modal-one.component';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(
    private modal: NgbModal
  ) { }

  ngOnInit() {
  }

  openModalOne(): void {
    this.modal.open(ModalOneComponent, { size: 'lg' })
      .result
      .then((resolve) => { console.log(resolve); })
      .catch((reject) => { console.log(reject); });
  }

}
