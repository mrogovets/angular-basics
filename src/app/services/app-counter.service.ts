import { Injectable } from '@angular/core';
@Injectable()
export class AppCounterService {
  counter = 0;
  increase() {
    this.counter++;
  }
  decrease() {
    this.counter--;
  }
}
