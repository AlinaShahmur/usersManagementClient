import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataFromServerService } from '../data-from-server.service';
import { DatamediatorService } from '../datamediator.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


  sub : Subscription = new Subscription()
  users : any[] = []
  filteredUsers : any[] = []
  queryVal : string = ''
  currID : any = '';
  constructor(private server : DataFromServerService, private datamediator : DatamediatorService, private route : Router) { }

  ngOnInit(): void {
    localStorage.removeItem('currID')
    this.sub = this.server.getAllUsers().subscribe(data => {
      this.users = data
      this.filteredUsers = data
      this.datamediator.setUsers(data)
    })
    if (localStorage.getItem('currID')) {
        this.currID = localStorage.getItem('currID')
    }
  }

  search(query : string) {
    this.users = this.filteredUsers.filter(user => user.name.toLowerCase().includes(query.toLowerCase())||user.email.toLowerCase().includes(query.toLowerCase()))
  }

  toCreate() {
    this.route.navigate(['/create'])
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
