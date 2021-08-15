import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatamediatorService {
  users : any[] = []
  constructor() { }

  setUsers(users : any[]) {
    this.users = users
  }

  getUser() {
    return this.users
  }
  
}

