import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  isOpen = false;
  title = '';
  contentHtml: string = '';
  btnOption1: string = 'OK';
  btnOption2: string = 'ANNULLA';
  showFirstBtn = true;
  showSecondBtn = true;

  constructor(private modalService: ModalService) {}

  ngOnInit() {
    this.modalService.modalState$.subscribe(data => {
      this.isOpen = data.isOpen;
      this.title = data.title;
      this.contentHtml = data.content || '';
      this.showFirstBtn = data.showFirstBtn;
      this.showSecondBtn = data.showSecondBtn;
    });
  }

  closeModal() {
    this.modalService.closeModal();
  }
}
