import { Component, OnInit,Input, OnChanges,SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-comment-replay',
  templateUrl: './comment-replay.component.html',
  styleUrls: ['./comment-replay.component.css']
})
export class CommentReplayComponent implements OnInit,OnChanges {

  @Input() replies;
  replyData=[];
  constructor() { }

  onChanges = new Subject<SimpleChanges>();

  ngOnChanges(changes:SimpleChanges) {
    
    this.onChanges.next(changes);
  }

  

  ngOnInit(){
    this.onChanges.subscribe((resdata:SimpleChanges)=>{
      console.log("inside ngOInit");
      this.replyData=resdata["replies"]["currentValue"]["data"]["children"];
    });
  }

  ngOnDestroy(){
    this.onChanges.complete();
  }


}
