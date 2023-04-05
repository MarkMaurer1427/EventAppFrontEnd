import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EventObj } from 'src/app/models/EventObj';
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
      name: new FormControl(this.eventChange.name,Validators.compose([Validators.required,Validators.minLength(5)])),
      description: new FormControl(this.eventChange.description,Validators.compose([Validators.required,Validators.minLength(5)])),
      category: new FormControl(this.eventChange.category,Validators.compose([Validators.required,Validators.minLength(5)])),
      startDate: new FormControl(this.eventChange.startDate,Validators.compose([Validators.required])),
      endDate: new FormControl(this.eventChange.endDate,Validators.compose([Validators.required])),
      location: new FormControl(this.eventChange.location,Validators.compose([Validators.required,Validators.minLength(5)])),
      allowReg: new FormControl(this.eventChange.allowReg,Validators.compose([Validators.required])),
      imageSrc: new FormControl(this.eventChange.imageSrc,Validators.compose([Validators.required])),
      adultTicket: new FormControl(this.eventChange.adultTicket,Validators.compose([Validators.required,Validators.pattern("^[0-9]*$")])),
      childTicket: new FormControl(this.eventChange.childTicket,Validators.compose([Validators.required,Validators.pattern("^[0-9]*$")]))
  });
  }

  get name(){return this.eventForm.get('name');}
  get description(){return this.eventForm.get('description');}
  get category(){return this.eventForm.get('category');}
  get startDate(){return this.eventForm.get('startDate');}
  get endDate(){return this.eventForm.get('endDate');}
  get location(){return this.eventForm.get('location');}
  get allowReg(){return this.eventForm.get('allowReg');}
  get imageSrc(){return this.eventForm.get('imageSrc');}
  get adultTicket(){return this.eventForm.get('adultTicket');}
  get childTicket(){return this.eventForm.get('childTicket');}

  onSubmit()
  {
    console.log("Edit: submit button clicked");
    console.log(this.eventForm.value)
    this.eventService.updateEvent(this.eventForm.value).subscribe(
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


