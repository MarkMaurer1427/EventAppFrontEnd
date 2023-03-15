import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModalComponent } from './auth-modal/auth-modal.component';
import { SharedModule } from '../shared/shared.module';
import { UserViewComponent } from './user-view/user-view.component';
import { UserEventDisplayComponent } from './user-event-display/user-event-display.component';
import { ModalModule } from '../modal/modal.module';
import { UserEventDetailsComponent } from './user-event-details/user-event-details.component';




@NgModule({
  declarations: [
    AuthModalComponent,
    UserViewComponent,
    UserEventDisplayComponent,
    UserEventDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ModalModule
  ],
  exports: [
    AuthModalComponent,
    UserViewComponent,
    UserEventDisplayComponent
  ]
})
export class UserModule { }
