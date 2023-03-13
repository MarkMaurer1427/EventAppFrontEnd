import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { EventObj } from '../EventObj';

@Injectable({
  providedIn: 'root'
})
export class EventAPIService {
  

  url:string= "http://localhost:5006/api/"
  constructor(private httpClient: HttpClient) { }

  //READ ALL
  getEvents():Observable<any>{
    //http://localhost:5006/Event
    return this.httpClient.get(this.url + 'event');
  }

  //READ ONE
  getEvent(id: number):Observable<any>{
    return this.httpClient.get(this.url + 'event/' + id);
  }

  //DELETE ONE
  deleteEvent(id: number) {
    return this.httpClient.delete(this.url + 'event/' + id)
  }

  //CREATE ONE
  createEvent(event: EventObj){
    return this.httpClient.post(this.url + 'event',event)
  }


  //CREATE ONE
  updateEvent(event: EventObj){
    return this.httpClient.put(this.url + 'event/' + event['id'],event)
  }


}
