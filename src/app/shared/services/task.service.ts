import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL ='http://localhost:3000/'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private model = 'taskData';

  private taskData = [
    {
      "id": 1,
      "title": 'Angular Fundamentals',
      "description": 'Learn the fundamentals of Angular ', 
    },

    {
      "id": 2,
      "title": 'JavaScript The Really REALLY HARD PARTS',
      "description": 'Worship Will Sentance',
    },

    {
      "id": 3,
      "title": 'Angular Service',
      "description": 'Create the service in the app asap',
    },

  ];

  constructor(private http: HttpClient) { }

  all() {
    return this.http.get(this.getUrl());
  }

  find(taskId: any) {

  }

  create(task: any) {
     return this.http.post(this.getUrl(), task);
  }

  update(task: any) {
    console.log('UDDATE Task', task);
  }

  delete(taskId: any) {
    console.log('DLETE Task', taskId);
  }

  private getUrl() {
    return`${BASE_URL}${this.model}`;
  }
}
