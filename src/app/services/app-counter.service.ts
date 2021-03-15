import { Injectable } from '@angular/core';
import { LogService } from './log.service';
@Injectable({
  providedIn: 'root',
})
export class AppCounterService {
  counter = 0;

  constructor(private logservice: LogService) {}

  increase() {
    this.logservice.log('increase counter...');
    this.counter++;
  }
  decrease() {
    this.logservice.log('decrease counter...');
    this.counter--;
  }
}
