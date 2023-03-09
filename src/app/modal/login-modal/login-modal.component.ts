import { Component } from '@angular/core';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent
{
  showModal = false;
  toggleModal()
  {
    this.showModal = !this.showModal;
  }
}
