import { Component } from '@angular/core';

@Component({
  selector: 'app-event-reg-modal',
  templateUrl: './event-reg-modal.component.html',
  styleUrls: ['./event-reg-modal.component.css']
})
export class EventRegModalComponent
{
  showModal = false;
  toggleModal()
  {
    this.showModal = !this.showModal;
  }
}
