import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataFromServerService {

  constructor(private http : HttpClient) { }

  getAllUsers() {
    return this.http.get<any[]>('http://localhost:8000/api/users')
  }

  addUser(user : any) {
    return this.http.post('http://localhost:8000/api/users', user)
  }

  updateUser(id : string, user : any) {
    return this.http.put('http://localhost:8000/api/users/' + id, user)
  }

  deleteUser(id : string) {
    return this.http.delete('http://localhost:8000/api/users/' + id)
  }
}
