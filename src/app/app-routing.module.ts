import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutExtraComponent } from "./about-extra/about-extra.component";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { PostComponent } from "./post/post.component";
import { PostsComponent } from "./posts/posts.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "about",
    component: AboutComponent,
    children: [{ path: "extra", component: AboutExtraComponent }],
  },
  { path: "posts", component: PostsComponent },
  { path: "posts/:id", component: PostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
