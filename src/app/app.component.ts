import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Prathiksha Angular App';
  links = [
    { path: '/home', icon: 'home', title: 'Home'},
    { path: '/login', icon: 'person', title: 'Login'},
    { path: '/signup', icon: 'account_box', title: 'Signup'},
    { path: '/task', icon: 'assignment', title: 'Task'},

  ];

  constructor() {}
}

