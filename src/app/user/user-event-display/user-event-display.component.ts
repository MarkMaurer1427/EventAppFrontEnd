import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventObj } from 'src/app/EventObj';
import { EventAPIService } from 'src/app/services/event-api.service';

@Component({
  selector: 'app-user-event-display',
  templateUrl: './user-event-display.component.html',
  styleUrls: ['./user-event-display.component.css']
})
export class UserEventDisplayComponent {

  @Input() events: EventObj[]=[];
  department:any;
  
  constructor(private dataService: EventAPIService, private route: Router) { }

  ngOnInit() {
    this.dataService.getEvents().subscribe(
      (data) => {this.events = data},
      (err) => { console.log(err) },
      () => console.log('Complete')  
    )
    
  }

  getUpdateFromModal($event: any)
  {
    console.log("GetUpdateFromModal Called");
    this.events = ($event);
  }

  goToDetails(evDetail: any)
  {
    this.route.navigate(['user/eventDetails/', evDetail.id]);
  }

}
