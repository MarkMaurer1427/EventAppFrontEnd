import { Component } from '@angular/core';
import { EventObj } from 'src/app/models/EventObj';
import { EventAPIService } from 'src/app/services/event-api.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent {

  events: EventObj[]=[];
  department:any;
  
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
