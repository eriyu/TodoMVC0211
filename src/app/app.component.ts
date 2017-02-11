import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  inputHint:string = 'Please input your todo item';
  todos:any[] = [];

  constructor() { }

  ngOnInit() {
  }

  addTodo(todoval:string){
    this.todos.push(todoval);
    console.log(this.todos);
  }

}
