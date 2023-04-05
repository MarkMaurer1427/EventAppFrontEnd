import { Injectable } from '@angular/core';
import { EventObj } from '../models/EventObj';
import { RegObj } from '../models/RegObj';

@Injectable({
  providedIn: 'root'
})
export class EventRegistrationService {

  regData: RegObj | undefined
  eventReg: EventObj | undefined

  constructor() {
    
   }
}
