import { Injectable, TemplateRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface ModalData {
  isOpen: boolean;
  title: string;
  content?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modalState = new BehaviorSubject<ModalData>({
    isOpen: false,
    title: '',
  });

  modalState$ = this.modalState.asObservable();

  openModal(title: string, content?: string) {
    this.modalState.next({
      isOpen: true,
      title,
      content
    });
  }

  closeModal() {
    this.modalState.next({
      isOpen: false,
      title: '',
      content: undefined
    });
  }
}
