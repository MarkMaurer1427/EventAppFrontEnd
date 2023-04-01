import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { EventObj } from 'src/app/models/EventObj';
import { EventAPIService } from 'src/app/services/event-api.service';

@Component({
  selector: 'app-admin-event-display-component',
  templateUrl: './admin-event-display-component.component.html',
  styleUrls: ['./admin-event-display-component.component.css']
})
export class AdminEventDisplayComponentComponent implements OnChanges{

  @Input()  events: EventObj[] = [];
  @Output() notifyDisplay: EventEmitter<EventObj> = new EventEmitter();



  constructor(private eventService: EventAPIService) { }

  ngOnChanges(changes: SimpleChanges): void {
      this.eventService.getEvents().subscribe(
        (data) => {this.events = data},
        (err) => { console.log(err) },
        () => console.log('Refresh Called')  
      );
    
  }

  sendEventToParent(event:EventObj){
    this.notifyDisplay.emit(event);
  }

  updateDisplay($event: any){
    console.log('updateDisplay called.')
    this.ngOnChanges($event);
  }

  


  
}
