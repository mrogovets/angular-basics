import { Component } from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] = [
    {title: 'I want to study Angular components', text: 'I am studing Angular components', id: 1},
    {title: 'Next block', text: 'It will be about directives and pipes', id: 2}
  ];
}
