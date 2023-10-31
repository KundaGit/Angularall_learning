import { Injectable } from '@angular/core';
import * as scheduleData from '../../../assets/sheduled.json'
@Injectable({
  providedIn: 'root'
})
export class BlackService {

  constructor() { }

  getScheduledData(){
    return scheduleData
  }
}
