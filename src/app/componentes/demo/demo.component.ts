import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  public posts = [];

  constructor(private _postService: PostsService) { }

  ngOnInit() {
    this._postService.getPosts()
      .subscribe(data => this.posts = data);
  }

}
