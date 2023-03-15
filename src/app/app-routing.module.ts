import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventViewComponent } from './admin/event-view/event-view.component';
import { HomeComponent } from './home/home.component';
import { UserEventDetailsComponent } from './user/user-event-details/user-event-details.component';
import { UserViewComponent } from './user/user-view/user-view.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'admin', component: EventViewComponent},
  {path: 'user', component: UserViewComponent},
  {path: 'user/eventDetails/:id', component: UserEventDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
