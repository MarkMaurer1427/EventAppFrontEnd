import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EventObj } from 'src/app/EventObj';
import { EventAPIService } from 'src/app/services/event-api.service';

@Component({
  selector: 'app-event-reg-modal',
  templateUrl: './event-reg-modal.component.html',
  styleUrls: ['./event-reg-modal.component.css']
})
export class EventRegModalComponent
{
  regForm!: FormGroup;
  events: any;
  errorMsg: any;

  constructor(private eventService: EventAPIService) {}
  @Input() event!: EventObj;
  @Output() notify: EventEmitter<any> = new EventEmitter();

  showModal = false;
  toggleModal()
  {
    this.showModal = !this.showModal;
  }

  
  ngOnInit(): void {
    this.regForm = new FormGroup({

      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      address: new FormControl(''),
      numberAdults: new FormControl(''),
      numberChild: new FormControl(''),

  });
  }

  onSubmit(regForm: FormGroup)
  {
    
  }

}
