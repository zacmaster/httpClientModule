import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { IPost } from '../interfaces/i-post';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private URL = 'https://jsonplaceholder.typicode.com/posts';
  
  
  constructor(private http: HttpClient) { }

  getPosts(): Observable<IPost[]>{
    return this.http.get<IPost[]>(this.URL);
  }

}
