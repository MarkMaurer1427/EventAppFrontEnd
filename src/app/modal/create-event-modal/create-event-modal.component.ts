import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { EventObj } from 'src/app/EventObj';
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

      name: new FormControl(''),
      description: new FormControl(''),
      category: new FormControl(''),
      startDate: new FormControl(''),
      endDate: new FormControl(''),
      location: new FormControl(''),
      allowReg: new FormControl(false),
      imageSrc: new FormControl(''),
      adultTicket: new FormControl(''),
      childTicket: new FormControl('')

  });
  }

  onSubmit(eventForm: FormGroup)
  {
    console.log("submit button clicked");
    console.log(eventForm.value)
    this.eventService.createEvent(eventForm.value).subscribe(
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