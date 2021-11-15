import { Component, OnInit, } from '@angular/core';
import { TaskService } from './task.service';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  [x: string]: any;
  
  selectedTask = null as any;
  
  taskData = null as any;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.resetSelectedTask();
    this.loadTaskData();
  }
  
  
  selectTask(task: any) {
    this.selectedTask = task;
  }

  loadTaskData() {
    this.taskService.all()
      .subscribe(taskData =>this.taskData = taskData);
  }

  refreshTaskData(){
    this.resetSelectedTask();
    this.loadTaskData();
  }

  deleteTask(taskId: any) {
    this.taskService.delete(taskId)
      .subscribe(result => this.refreshTaskData());
  }

  saveTask(task: any) {
    if(task.id) {
      this.taskService.update(task)
        .subscribe(result => this.refreshTaskData());
    } else {
      this.taskService.create(task)
        .subscribe(result => this.refreshTaskData());
    }
  }

  cancel(){
    this.resetSelectedTask();
  }

  resetSelectedTask() {
    const emptyTask = {
      "id" : null,
      "name" : '',
      "description" : '',
    };
    this.selectedTask = emptyTask;

  };


  

}
