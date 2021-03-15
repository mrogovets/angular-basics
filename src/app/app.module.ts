import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppCounterService } from './services/app-counter.service';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [AppComponent, CounterComponent],
  imports: [BrowserModule, FormsModule],
  // providers: [AppCounterService],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
