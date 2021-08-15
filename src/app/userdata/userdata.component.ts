import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubscribableOrPromise, Subscription } from 'rxjs';
import { DatamediatorService } from '../datamediator.service';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent implements OnInit {
  sub : Subscription = new Subscription();
  id : string = ''
  user : any = {}
  constructor(private datamediator : DatamediatorService, private ar : ActivatedRoute) { }

  ngOnInit(): void {
   this.sub = this.ar.params.subscribe(data => {
      this.id= data['id']
      this.user = this.datamediator.getUser().find(item => item._id === this.id)

  })
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }
}
