import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { EventObj } from 'src/app/EventObj';
import { EventAPIService } from 'src/app/services/event-api.service';

@Component({
  selector: 'app-user-event-details',
  templateUrl: './user-event-details.component.html',
  styleUrls: ['./user-event-details.component.css']
})
export class UserEventDetailsComponent implements OnInit{

  constructor(private route: ActivatedRoute, private router: Router, private service: EventAPIService){}
  eventId: any;
  event!: EventObj;
  errorMsg: any;

  ngOnInit(){
    this.route.paramMap.subscribe((params: ParamMap) =>
    {
      let id = params.get('id');
      console.log('Getting param id ', id)
      this.eventId = id;
      console.log('Got event ID ', this.eventId);
      this.service.getEvent(this.eventId).subscribe(
        (data) => {
          this.event = data;
          console.log('Got event:', this.event);
        },
        (error) => {this.errorMsg = error; console.log(this.errorMsg)}
      );      
    });
  }

  goBack()
  {
    this.router.navigate(['user']);
  }

  getImgSrc(event: any){
    let imgTemplate = "images/";
    let imgURL = imgTemplate.concat(event.imageSrc,".jpg")
    return imgURL;
  }

}
