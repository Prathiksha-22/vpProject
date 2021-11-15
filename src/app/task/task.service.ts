import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL = 'http://localhost:3000/';


@Injectable({
  providedIn: 'root'
})

export class TaskService {
  

  private model = 'taskData';
  
  private taskData = [
    { 
      "name": "Make a todo list", 
      "id":1, 
      "description": "Create plan for this week"
    },
    { 
      "name": "Angular Components", 
      "id":2, 
      "description": "Learn the advanced concepts of angular"
    },
    { 
      "name": "Paint", 
      "id":3, 
      "description": "Keep up with the painting series"
    }
  ]


  constructor(private http: HttpClient) { }

  all() {
    return this.http.get(this.getUrl());
  }

  find(taskId: any) {
    return this.http.get(this.getUrlById(taskId));
  }

  create(task: any) {
    return this.http.post(this.getUrl(), task);
  }

  update(task:any) {
    return this.http.put(this.getUrlById(task.id), task);
  }

  delete(taskId:any) {
    return this.http.delete(this.getUrlById(taskId));
  }

  private getUrl() {
    return `${BASE_URL}${this.model}`;
  }

  private getUrlById(id: any) {
    return `${this.getUrl()}/${id}`;
  }

}
