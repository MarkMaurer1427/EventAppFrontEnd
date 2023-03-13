import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EventObj } from 'src/app/EventObj';
import { EventAPIService } from 'src/app/services/event-api.service';

@Component({
  selector: 'app-edit-event-modal',
  templateUrl: './edit-event-modal.component.html',
  styleUrls: ['./edit-event-modal.component.css']
})
export class EditEventModalComponent
{

  eventForm!: FormGroup;
  events: any;
  event: any
  errorMsg: any;

  constructor(private eventService: EventAPIService) {}
  
  @Input() public eventChange!: EventObj;
  @Output() notifyEdit: EventEmitter<any> = new EventEmitter();

  showModal = false;
  toggleModal()
  {
    this.showModal = !this.showModal;
  }

  ngOnInit(): void {
    this.eventForm = new FormGroup({

      id: new FormControl(this.eventChange.id),
      name: new FormControl(this.eventChange.name),
      description: new FormControl(this.eventChange.description),
      category: new FormControl(this.eventChange.category),
      startDate: new FormControl(this.eventChange.startDate),
      endDate: new FormControl(this.eventChange.endDate),
      location: new FormControl(this.eventChange.location),
      allowReg: new FormControl(this.eventChange.allowReg),
      imageSrc: new FormControl(this.eventChange.imageSrc),
      adultTicket: new FormControl(this.eventChange.adultTicket),
      childTicket: new FormControl(this.eventChange.childTicket)

  });
  }

  onSubmit(eventForm: FormGroup)
  {
    console.log("Edit: submit button clicked");
    console.log(eventForm.value)
    this.eventService.updateEvent(eventForm.value).subscribe(
      (data) =>{
        this.event = data; 
        console.log(this.event); 
        this.updateParentComponent(this.event);        
        });
        
        this.toggleModal();
  }
    

  

  updateParentComponent(ev: any){
    console.log("UpdateParentComponent Called");
    this.notifyEdit.emit(ev);
  }

}


