import { Component, EventEmitter, Input, Output, } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {

  @Input() taskData: any;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

}
