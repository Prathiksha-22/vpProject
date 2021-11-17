import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  currentTask = null as any;

  taskData = [
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
      "description": 'Connect the API in the project',
    },

  ];

  ngOnInit(): void {
    this.resetCurrentTask();
  }

  resetCurrentTask() {
    const emptyTask = {
      id: null,
      title: '',
      description: '',
      percentComplete: 0,
      favorite: false
    };

    this.currentTask = emptyTask;
  }

 
  selectTask(task:any) {
    this.currentTask = task;
    console.log('Selected!', task)
  }

  saveTask() {
    console.log('SAVE SOURCE!');
  }

  deleteTask(taskId: any) {
    console.log('Task DELETED!', taskId);
  }

  cancel() {
   console.log('canceled',)
  }
}



