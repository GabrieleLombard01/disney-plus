import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface ModalData {
  isOpen: boolean;
  title: string;
  content?: string;
  showFirstBtn: boolean;
  showSecondBtn: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modalState = new BehaviorSubject<ModalData>({
    isOpen: false,
    title: '',
    content: '',
    showFirstBtn: true,
    showSecondBtn: true
  });

  modalState$ = this.modalState.asObservable();

  openModal(title: string, content?: string, showFirstBtn: boolean = true, showSecondBtn: boolean = true) {
    this.modalState.next({
      isOpen: true,
      title,
      content,
      showFirstBtn,
      showSecondBtn
    });
  }

  closeModal() {
    this.modalState.next({
      isOpen: false,
      title: '',
      content: '',
      showFirstBtn: true,
      showSecondBtn: true
    });
  }
}
