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
  updatePosts(post: Post) {
    this.posts.unshift(post);
    // console.log('Post', post)
  }
  removePost(id: number) {
    console.log("Id to remove", id)
    this.posts = this.posts.filter(post => post.id !== id)
  }
}
