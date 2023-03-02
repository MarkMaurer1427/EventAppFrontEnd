import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EventObj } from 'src/app/EventObj';

@Component({
  selector: 'app-admin-event-display-component',
  templateUrl: './admin-event-display-component.component.html',
  styleUrls: ['./admin-event-display-component.component.css']
})
export class AdminEventDisplayComponentComponent implements OnInit {

  @Input()
  events: EventObj[] = [];
  @Output() notify: EventEmitter<EventObj> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  sendEmployeeToParent(event:EventObj){
    this.notify.emit(event);
  }

}
