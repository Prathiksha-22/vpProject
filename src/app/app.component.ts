import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Prathiksha Angular App';
  
  links = [
    { path: '/home', icon: 'home', title: 'Home'},
    { path: '/task', icon: 'assignment', title: 'Task'},
    { path: '/reactive-form', icon: 'description', title: 'Reactive Form'}

  ];

  constructor(private router: Router) {}

  logout() {
    this.router.navigateByUrl('/login')
  }
}

