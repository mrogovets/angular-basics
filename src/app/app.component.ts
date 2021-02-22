import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
arr = [1, 1, 2, 3, 5, 8, 13]

objs = [
  {title: 'Post 1', author: 'Max', comments: [
    {name: 'John', text: 'lorem 1'},
    {name: 'John', text: 'lorem 2'},
    {name: 'John', text: 'lorem 3'},
  ]},
  {title: 'Post 2', author: 'Max2', comments: [
    {name: 'John2', text: 'lorem 1'},
    {name: 'John2', text: 'lorem 2'},
    {name: 'John2', text: 'lorem 3'},
  ]},
]

}
