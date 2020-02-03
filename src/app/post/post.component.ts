import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { Router } from '@angular/router';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts:any;
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  constructor(private postService:PostService,private router:Router) { }

  ngOnInit() {
    this.postService.getAllPosts().subscribe(
      responseData => {
        this.posts=responseData["data"]["children"];
      }
    );
  }

  
}
