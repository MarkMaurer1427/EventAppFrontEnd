import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModalComponent } from './auth-modal/auth-modal.component';
import { SharedModule } from '../shared/shared.module';
import { UserViewComponent } from './user-view/user-view.component';
import { UserEventDisplayComponent } from './user-event-display/user-event-display.component';



@NgModule({
  declarations: [
    AuthModalComponent,
    UserViewComponent,
    UserEventDisplayComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    AuthModalComponent,
    UserViewComponent,
    UserEventDisplayComponent
  ]
})
export class UserModule { }
