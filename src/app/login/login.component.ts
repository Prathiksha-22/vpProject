import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input() public message: string = 'This is a popup';
  

  public showAlert():void{
    alert(this.message);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
