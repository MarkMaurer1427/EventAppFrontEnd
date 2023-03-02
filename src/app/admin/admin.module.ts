import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventViewComponent } from './event-view/event-view.component';
import { AdminEventDisplayComponentComponent } from './admin-event-display-component/admin-event-display-component.component';



@NgModule({
  declarations: [
    EventViewComponent,
    AdminEventDisplayComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EventViewComponent,
    AdminEventDisplayComponentComponent
  ]
})
export class AdminModule { }
