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

  constructor(private modalService: ModalService) {}

  ngOnInit() {
    this.modalService.modalState$.subscribe(data => {
      this.isOpen = data.isOpen;
      this.title = data.title;
      this.contentHtml = data.content || '';
    });
  }

  closeModal() {
    this.modalService.closeModal();
  }
}
