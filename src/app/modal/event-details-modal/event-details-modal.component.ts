import { Component, Input } from '@angular/core';
import { EventObj } from 'src/app/models/EventObj';

@Component({
  selector: 'app-event-details-modal',
  templateUrl: './event-details-modal.component.html',
  styleUrls: ['./event-details-modal.component.css']
})
export class EventDetailsModalComponent {

  showModal = false;
  @Input() event: any

  toggleModal()
  {
    this.showModal = !this.showModal;
  }



}
