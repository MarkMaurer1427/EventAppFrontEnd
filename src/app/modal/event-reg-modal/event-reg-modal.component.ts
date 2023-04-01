import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventObj } from 'src/app/models/EventObj';
import { RegObj } from 'src/app/models/RegObj';
import { EventAPIService } from 'src/app/services/event-api.service';
import { EventRegistrationService } from 'src/app/services/event-registration-service';

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

  constructor(private eventService: EventAPIService,private route: Router, private regService: EventRegistrationService) {}
  @Input() event!: EventObj;
  @Output() notify: EventEmitter<any> = new EventEmitter();

  showModal = false;
  toggleModal()
  {
    this.showModal = !this.showModal;
  }

  
  ngOnInit(): void {
    this.regForm = new FormGroup({

      firstName: new FormControl('',Validators.compose([Validators.required,Validators.minLength(5)])),
      lastName: new FormControl('',Validators.compose([Validators.required,Validators.minLength(5)])),
      email: new FormControl('',Validators.compose([Validators.required,Validators.email])),
      phone: new FormControl('',Validators.compose([Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])),
      address: new FormControl('',Validators.compose([Validators.required,Validators.minLength(5)])),
      numberAdults: new FormControl('',Validators.compose([Validators.required,Validators.pattern("^[0-9]*$")])),
      numberChild: new FormControl('',Validators.compose([Validators.required,Validators.pattern("^[0-9]*$")])),

  });
  }

  get firstName(){return this.regForm.get('firstName');}
  get lastName(){return this.regForm.get('lastName');}
  get email(){return this.regForm.get('email');}
  get phone(){return this.regForm.get('phone');}
  get address(){return this.regForm.get('address');}
  get numberAdults(){return this.regForm.get('numberAdults');}
  get numberChild(){return this.regForm.get('numberChild');}

  onSubmit()
  {
    let regData = new RegObj(this.regForm.value)
    console.log('Sending registration data')
    console.log(regData);
    console.log(this.event);
    this.regService.regData = regData;
    this.regService.eventReg = this.event;
    this.route.navigate(['user/regConfirmation']);
  }

}
