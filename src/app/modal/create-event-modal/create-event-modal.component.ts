import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { EventObj } from 'src/app/models/EventObj';
import { EventAPIService } from 'src/app/services/event-api.service';

@Component({
  selector: 'app-create-event-modal',
  templateUrl: './create-event-modal.component.html',
  styleUrls: ['./create-event-modal.component.css']
})


export class CreateEventModalComponent implements OnInit
{
  eventForm!: FormGroup;
  events: any;
  errorMsg: any;

  constructor(private eventService: EventAPIService) {}
  @Output() notify: EventEmitter<any> = new EventEmitter();

  showModal = false;
  toggleModal()
  {
    this.showModal = !this.showModal;
  }

  
  ngOnInit(): void {
    this.eventForm = new FormGroup({

      name: new FormControl('',Validators.compose([Validators.required,Validators.minLength(5)])),
      description: new FormControl('',Validators.compose([Validators.required,Validators.minLength(5)])),
      category: new FormControl('',Validators.compose([Validators.required,Validators.minLength(5)])),
      startDate: new FormControl('',Validators.compose([Validators.required])),
      endDate: new FormControl('',Validators.compose([Validators.required])),
      location: new FormControl('',Validators.compose([Validators.required,Validators.minLength(5)])),
      allowReg: new FormControl(false,Validators.compose([Validators.required])),
      imageSrc: new FormControl('',Validators.compose([Validators.required])),
      adultTicket: new FormControl('',Validators.compose([Validators.required,Validators.pattern("^[0-9]*$")])),
      childTicket: new FormControl('',Validators.compose([Validators.required,Validators.pattern("^[0-9]*$")]))
      
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
    console.log("submit button clicked");
    console.log(this.eventForm.value)
    this.eventService.createEvent(this.eventForm.value).subscribe(
      (data) =>{
        this.events = data;
        console.log(this.events);
        this.updateParentComponent(this.events);
      }
    );
    this.eventForm.reset();
    this.toggleModal();

  }

  updateParentComponent(evList: any){
    console.log("UpdateParentComponent Called");
    this.notify.emit(evList);
  }



}