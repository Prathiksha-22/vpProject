import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

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

  constructor() { }

  all() {
    return this.taskData;
  }

  find(taskId: any) {

  }

  create(task: any) {
    console.log('CREATE Task', task);
  }

  update(task: any) {
    console.log('UDDATE Task', task);
  }

  delete(taskId: any) {
    console.log('DLETE Task', taskId);
  }
}
