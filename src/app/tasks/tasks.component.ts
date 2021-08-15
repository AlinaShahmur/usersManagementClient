import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataFromServerService } from '../data-from-server.service';
import { DatamediatorService } from '../datamediator.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  taskTitle : string = ''
  isAddTaskShown : boolean = false
  sub1 : Subscription = new Subscription()
  sub2 : Subscription = new Subscription()
  @Input()
  user : any = {}

  constructor(private server : DataFromServerService, private router : Router) { }

  ngOnInit(): void {
  }

  setCompleted(taskId : string) {
    let taskIndex = this.user.tasks.findIndex((task:any) => task._id === taskId);
    this.user.tasks[taskIndex].completed = true;
    this.sub1 = this.server.updateUser(this.user._id, this.user).subscribe(data => console.log(data))
    this.router.navigate(['/'])
  }

  addTask() {
    if (this.taskTitle !== '') {
      let newTask = {title: this.taskTitle, body: '', completed: false}
      this.user.tasks = [...this.user.tasks, newTask]
      this.server.updateUser(this.user._id,this.user).subscribe(data => {
        alert(data)
        this.router.navigate(['/'])
      })
    } else {
      alert('You didn\'t enter the value')
    }
  }

  ngOnDestroy() {
    this.sub1.unsubscribe()
    this.sub2.unsubscribe()
  }
}
