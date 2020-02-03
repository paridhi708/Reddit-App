import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CommentsPageComponent } from './comments-page/comments-page.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'comments-page/:link', component:CommentsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
