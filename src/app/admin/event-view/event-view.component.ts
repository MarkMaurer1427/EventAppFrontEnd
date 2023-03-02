import { Component } from '@angular/core';
import { concatMap, zip } from 'rxjs';
import { EventAPIService } from 'src/app/services/event-api.service';
import { EventObj } from 'src/app/EventObj';

@Component({
  selector: 'app-event-view',
  templateUrl: './event-view.component.html',
  styleUrls: ['./event-view.component.css']
})
export class EventViewComponent {

  events: EventObj[]=[];
  department:any;
  fullname: string='';
  
  constructor(private dataService: EventAPIService) { }

  ngOnInit() {
    // this.Events = this.dataService.Events;
    this.dataService.getEvents().subscribe(
      (data) => {this.events = data, 
      
        this.dataService.getDepartmentData().subscribe(
          (data) => {this.department = data},
          (err) => { console.log(err) },
          () => console.log('Complete')  
        )
      },
      (err) => { console.log(err) },
      () => console.log('Complete')  
    )
    

    let firstObs = this.dataService.getEvents();
    let secondObs = this.dataService.getDepartmentData();
    
    //Order does not matter
    zip(firstObs,secondObs).subscribe(
      (data) => {
        this.events = data[0]
        this.department = data[1]
      },
      (err) => {},
      () => {}
    )

    //We want to get Event first before department
    let combination = this.dataService.getEvents().pipe(
      concatMap(
        (dataOfEvent) => { 
          this.events = dataOfEvent;
          return  this.dataService.getDepartmentData()
        }
      )
    )

    combination.subscribe(
      (departData) => {
        this.department = departData
      }
    )
  }

  recieveMsgFromChild($event: any){
    let name = $event;
    this.fullname = name.Firstname + ' ' + name.Lastname;
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

  deleteEvent(id:number){
    this.dataService.deleteEvent(id).subscribe(
      (data) => {console.log(data),this.displayEvents()},
      (err) => console.log(err)
    )
  }

  createEvent(){
    let Event:EventObj = new EventObj(5, "New Event","New Description","New Category", new Date("0000-01-01"), new Date("9999-12-31"),"New Location",true, "New IMG", 7.77, 5.55);
    this.dataService.createEvent(Event).subscribe(
      (data) => {console.log(data),this.displayEvents()},
      (err) => console.log(err)
    )
  }

  updateEvent(){
    let Event:EventObj = new EventObj(5, "Updated Event","New Description","New Category", new Date("0000-01-01"), new Date("9999-12-31"),"New Location",true, "New IMG", 5.55, 3.33);
    this.dataService.createEvent(Event).subscribe(
      (data) => {console.log(data),this.displayEvents()},
      (err) => console.log(err)
    )
    
  }
}



