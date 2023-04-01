import { Component, OnInit } from '@angular/core';
import { EventRegModalComponent } from 'src/app/modal/event-reg-modal/event-reg-modal.component';
import { EventObj } from 'src/app/models/EventObj';
import { RegObj } from 'src/app/models/RegObj';
import { EventRegistrationService } from 'src/app/services/event-registration-service';

@Component({
  selector: 'app-user-reg-confirmation-component',
  templateUrl: './user-reg-confirmation-component.component.html',
  styleUrls: ['./user-reg-confirmation-component.component.css']
})
export class UserRegConfirmationComponentComponent implements OnInit {

  regData: any
  regEvent!: EventObj

  constructor(private regService: EventRegistrationService){
    
  }
  ngOnInit(): void {
    console.log("Getting registration data");
    this.regData = this.regService.regData;
    console.log(this.regData);
    this.regEvent = this.regData.eventReg;
    console.log(this.regEvent);
    this.regService.regData = undefined;
    this.regService.eventReg = undefined;
  }

  getTotalAdult()
  {
    return this.regData.numberAdults * this.regEvent.adultTicket;
  }

  getTotalChild()
  {
    return this.regData.numberChild * this.regEvent.childTicket;
  }

  getTotal()
  {
    return this.getTotalAdult() + this.getTotalChild();
  }
}
