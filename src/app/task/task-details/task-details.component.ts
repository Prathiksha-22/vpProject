import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent  {

  currentTask: any;
  originalTitle: any;

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  @Input() set task(value:any) {
    if(value) {
      this.currentTask = Object.assign({}, value);
      this.originalTitle = value.title;
    }
  }

}
