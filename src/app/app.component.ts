import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Dynamic title'
  number = 42
  arr = [1, 2, 3]

  obj = {a: 1, b: {c: 2}}

  inputValue = ''

  onInput(event:KeyboardEvent) {
    // this.inputValue = (<HTMLInputElement>event.target).value;
  }

  onBlur(str:string) {
    this.inputValue = str
  }

  onClick() {
    console.log('Click!');
  }
}
