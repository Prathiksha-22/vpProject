import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Hello Workshop';
  currentLesson = null;
  lessonData = [
    { "name": "Components" },
    { "name": "Directives" },
    { "name": "Attributes" },
    { "name": "Data Binding" },
    { "name": "Angular Material" },
    { "name": "Forms" },
    { "name": "Server Communication" },
    { "name": "Angular Routing" },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  selectLesson(lesson:any) {
    console.log('Selected!', lesson);
    this.currentLesson = lesson;
  }


}


