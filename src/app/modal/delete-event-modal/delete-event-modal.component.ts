import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EventObj } from 'src/app/EventObj';
import { EventAPIService } from 'src/app/services/event-api.service';

@Component({
  selector: 'app-delete-event-modal',
  templateUrl: './delete-event-modal.component.html',
  styleUrls: ['./delete-event-modal.component.css']
})
export class DeleteEventModalComponent
{
  constructor(private eventService: EventAPIService) {}

  showModal = false;

  @Input() public eventDel!: EventObj;
  @Output() notifyDelete: EventEmitter<any> = new EventEmitter();

  events: any;
  errorMsg: any;

  toggleModal()
  {
    this.showModal = !this.showModal;
  }

  ngOnInit() {
    
    }

  confirmDel()
  {
    this.eventService.deleteEvent(this.eventDel.id).subscribe(
      (data) =>{
        this.events = data;
        console.log(this.events);
        this.updateParentComponent(this.events);
      }
    );
    this.toggleModal();

  }

  updateParentComponent(evList: any){
    console.log("UpdateParentComponent Called");
    this.notifyDelete.emit(evList);
  }

  }

