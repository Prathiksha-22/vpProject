import { TaskService } from './../shared/services/task.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  [x: string]: any;

  currentTask = null as any;

  taskData = null as any;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.resetCurrentTask();
    this.taskData = this.taskService.all();
  }

  resetCurrentTask() {
    const emptyTask = {
      id: null,
      title: '',
      description: '',
    };

    this.currentTask = emptyTask;
  }

 
  selectTask(task:any) {
    this.currentTask = task;
  }

  saveTask(task:any) {
    if(this.currentTask.id) {
      this.taskService.update(this.task);    
    } else {
      this.taskService.create(this.task);
    }
  }

  deleteTask(taskId: any) {
    this.taskService.delete(taskId);
  }

  cancel() {
   this.resetCurrentTask();
  }
}



