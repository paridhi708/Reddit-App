import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  getCommentsData(plink): Observable<any> {
    
    return this.http.get('https://www.reddit.com/'+plink+'.json');
  }
}
