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


  constructor(public regService: EventRegistrationService){
    
  }
  ngOnInit(): void {
    console.log("Getting registration data");
    console.log(this.regService.regData);
    console.log(this.regService.eventReg);
  }

  getTotalAdult()
  { if (this.regService.regData == undefined) return null;
    if (this.regService.eventReg == undefined) return null;
    return this.regService.regData.numberAdults * this.regService.eventReg.adultTicket;
  }

  getTotalChild()
  {if (this.regService.regData == undefined) return null;
    if (this.regService.eventReg == undefined) return null;
    return this.regService.regData.numberAdults * this.regService.eventReg.childTicket;
  }

  getTotal()
  {
    let adult = this.getTotalAdult()
    let child = this.getTotalChild();

    if (adult == null || child == null) return null;
    return adult + child;
  }
}
