import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventViewComponent } from './event-view/event-view.component';
import { AdminEventDisplayComponentComponent } from './admin-event-display-component/admin-event-display-component.component';
import { ModalModule } from '../modal/modal.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EventViewComponent,
    AdminEventDisplayComponentComponent
  ],
  imports: [
    CommonModule,
    ModalModule,
    ReactiveFormsModule
  ],
  exports: [
    EventViewComponent,
    AdminEventDisplayComponentComponent
  ]
})
export class AdminModule { }
