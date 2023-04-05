import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEventModalComponent } from './create-event-modal/create-event-modal.component';
import { EditEventModalComponent } from './edit-event-modal/edit-event-modal.component';
import { DeleteEventModalComponent } from './delete-event-modal/delete-event-modal.component';
import { EventRegModalComponent } from './event-reg-modal/event-reg-modal.component';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { ReactiveFormsModule} from '@angular/forms';
import { EventDetailsModalComponent } from './event-details-modal/event-details-modal.component';



@NgModule({
  declarations: [
    CreateEventModalComponent,
    EditEventModalComponent,
    DeleteEventModalComponent,
    EventRegModalComponent,
    LoginModalComponent,
    EventDetailsModalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    CreateEventModalComponent,
    EditEventModalComponent,
    DeleteEventModalComponent,
    EventRegModalComponent,
    LoginModalComponent,
    EventDetailsModalComponent
  ]
})
export class ModalModule { }
