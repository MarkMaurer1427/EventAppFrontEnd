import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventViewComponent } from './admin/event-view/event-view.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'admin', component: EventViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
