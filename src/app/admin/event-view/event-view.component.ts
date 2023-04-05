import { Component } from '@angular/core';
import { concatMap, zip } from 'rxjs';
import { EventAPIService } from 'src/app/services/event-api.service';
import { EventObj } from 'src/app/models/EventObj';
import { Router } from '@angular/router';


@Component({
  selector: 'app-event-view',
  templateUrl: './event-view.component.html',
  styleUrls: ['./event-view.component.css']
})
export class EventViewComponent {

  events: EventObj[]=[];
  
  
  constructor(private dataService: EventAPIService) { }

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

  displayEvent(id:number){
    
    this.dataService.getEvent(id).subscribe(
      (data) => console.log(data),
      (err) => console.log(err)
    )
  }

  displayEvents(){
    this.dataService.getEvents().subscribe(
      (data) => this.events = data),
      (err: any) => console.log(err)
    
  }

 
}



