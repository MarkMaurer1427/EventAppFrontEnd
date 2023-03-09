import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-event-modal',
  templateUrl: './edit-event-modal.component.html',
  styleUrls: ['./edit-event-modal.component.css']
})
export class EditEventModalComponent
{
  showModal = false;
  toggleModal()
  {
    this.showModal = !this.showModal;
  }
}
