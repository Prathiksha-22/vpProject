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
    this.loadTaskData();
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

  loadTaskData() {
    this.taskService.all()
      .subscribe(taskData => this.taskData = taskData);
  }

  saveTask(task:any) {
    if(task.id) {
      this.taskService.update(task);    
    } else {
      this.taskService.create(task)
        .subscribe(result => this.loadTaskData());
    }
  }

  deleteTask(taskId: any) {
    this.taskService.delete(taskId);
  }

  cancel() {
   this.resetCurrentTask();
  }
}



