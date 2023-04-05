import { Injectable } from '@angular/core';
import { UserAPIService } from './user-api.service';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserAuthSevice {

  constructor(private userService: UserAPIService) { 
    this.isLoggedIn = false;
  }

  private isLoggedIn: boolean;
  private user: User | undefined;

  users: User[] = [];

  login(username: string, password: string)
  {
    this.userService.getUsers().subscribe(
      (data) => {this.users = data;
        this.users.forEach((user)=> {
          if (user.username == username && user.password == password)
          {
            this.user = user;
            this.isLoggedIn = true;
          }
        }) 
        
      }),

      (err: any) => console.log(err)
      

    
  }

  isUserAdmin() {
    return (this.user?.userRole == 'admin');
  }
  

}

