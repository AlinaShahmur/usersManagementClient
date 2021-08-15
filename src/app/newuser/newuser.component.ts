import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DataFromServerService } from '../data-from-server.service';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {

  sub : Subscription = new Subscription()
  constructor(private server : DataFromServerService) { }
  nameUser : string = ''
  emailUser : string = ''
  ngOnInit(): void {

  }
  addUser(isValid : boolean, form : NgForm) {
    if (isValid) {
      let user = {
        name: this.nameUser,
        email: this.emailUser
      }
      this.sub = this.server.addUser(user).subscribe(data => console.log(data));
      form.resetForm();
      location.reload();
    } else {
      alert('The name & email are not valid')
    }
  }
}
