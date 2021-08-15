import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataFromServerService } from '../data-from-server.service';
import { DatamediatorService } from '../datamediator.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  titleVal : string = ''
  bodyVal : string = ''
  isAddPostsShown : boolean = false
  sub : Subscription = new Subscription()
  @Input()
  user : any = {}
  constructor(private server : DataFromServerService, private router: Router) { }

  ngOnInit(): void {
  }

  addPost() {
    if (this.titleVal !== '' && this.bodyVal !== '') {
      let newPost = {title: this.titleVal, body: this.bodyVal};
      this.user.posts = [...this.user.posts, newPost]
      this.sub = this.server.updateUser(this.user._id,this.user).subscribe(data => {
        alert(data)
        this.titleVal = ''
        this.bodyVal = ''
        this.router.navigate(['/'])
      })
    } else {
      alert('You didn\'t enter any value')
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }

}
