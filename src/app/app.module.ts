import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IfnotDirective } from './directives/ifnot.directive';
import { StyleDirective } from './directives/style.directive';

@NgModule({
  declarations: [AppComponent, StyleDirective, IfnotDirective],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
