import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from './comment.service';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-comments-page',
  templateUrl: './comments-page.component.html',
  styleUrls: ['./comments-page.component.css']
})
export class CommentsPageComponent implements OnInit {

  link:any
  commentsData:any;
  commentHeaderData:any;
  commentsArray:Array<any>=[];
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  constructor(private activatedRoute: ActivatedRoute,private commentsService:CommentService) { }

  ngOnInit() {
    this.link = this.activatedRoute.snapshot.params.link;
    
    this.commentsService.getCommentsData(this.link).subscribe(
      responseData => {
        this.commentsData=responseData;
        this.commentHeaderData=this.commentsData[0]["data"]["children"][0]["data"];
        this.commentsArray=this.commentsData[1]["data"]["children"];
      }
    );
  }

  getCleanData(reply){
    let childArray=[];
    let newArray=[];
    if(reply){
    childArray=reply.data.children?reply.data.children:[];
    childArray.forEach(element => {
     let obj={
       score:element.data.score,
       body:element.data.body
     } 
      newArray.push(obj);
    });
  }

  else{
    let obj={
      score:0,
      body:" "
    }
      newArray.push(obj);
  }
    return newArray;
   }

}
