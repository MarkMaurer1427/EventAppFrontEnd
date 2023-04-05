import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAPIService {

  
  url:string= "http://localhost:5006/api/"
  constructor(private httpClient: HttpClient) { }

    //READ ALL
    getUsers():Observable<any>{
      //http://localhost:5006/USERS
      return this.httpClient.get(this.url + 'users');
    }
  
    //READ ONE
    getUser(id: number):Observable<any>{
      //http://localhost:5006/USERS/id
      return this.httpClient.get(this.url + 'users/' + id);
    }

}
