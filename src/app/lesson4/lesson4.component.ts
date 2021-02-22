import { Component, OnInit } from '@angular/core';
import { NgModalComponent } from './ng-modal/ng-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-lesson4',
  templateUrl: './lesson4.component.html',
  styleUrls: ['./lesson4.component.scss']
})
export class Lesson4Component implements OnInit {


  constructor(
    private _NgbModal: NgbModal
  ) { }

  ngOnInit(): void {
  }

// open modal
openModal() {
  this._NgbModal.open(NgModalComponent, {
    windowClass: 'modal-job-scrollable'
  });

  // upwrap the "app-ng-modal" data to enable the "modal-dialog-scrollable"
  // and make the modal scrollable
  (() => {
    const node: HTMLElement | null = document.querySelector('app-ng-modal');
    if (node) {
      while (node.firstChild) {
        (node.parentNode as HTMLElement).insertBefore(node.firstChild, node);
      }
    }
    // make the modal scrollable by adding the class .modal-dialog-scrollable
    // here wait for one second so that we can find the .modal-dialog
    setTimeout(() => {
      const modalDialog = document.querySelector('.modal-job-scrollable .modal-dialog');
      if (modalDialog) {
        modalDialog.classList.add('modal-dialog-scrollable');
      }
    }, 1000)
  })();
}

}
