import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {

  @Input() hideName: boolean = false;

  dynamicContent: string = 'test'

  constructor(
    private modalService: ModalService
  ) { }

  ngOnInit() {
  }

  openAvatarModal() {
    this.modalService.openModal(
      'Chi sta guardando?', 
      this.dynamicContent, 
      false, 
      false
    );
  }

}
