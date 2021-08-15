import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataFromServerService } from '../data-from-server.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user : any = {}
  @Input()
  isCurrPath : boolean = false
  isVisible : boolean = false
  isGreen : boolean = false
  sub1 : Subscription = new Subscription()
  sub2 : Subscription = new Subscription()
  constructor(private server : DataFromServerService, private router : Router) { }

  ngOnInit(): void {
    if (this.user.tasks.every((item : any )=> item.completed === true)) {
      this.isGreen = true
    }
  }
  updateUser() {
    this.sub1 = this.server.updateUser(this.user._id, this.user).subscribe(data => alert(data))
  }

  deleteUser() {
    this.sub2 = this.server.deleteUser(this.user._id).subscribe(data => {
      alert(data);
      location.reload()
    })
  }
  
  ngOnDestroy() {
    this.sub1.unsubscribe();
    this.sub2.unsubscribe()
  }
}
