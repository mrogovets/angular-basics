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

  img = 'https://olavihaapala.fi/images/04-react-suspense/react.png'

  constructor() {
    setTimeout(() =>{
      console.log('Timeout is over')
      this.img = 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png'
    }, 5000);
  }
  
}
