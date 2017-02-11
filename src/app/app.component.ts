import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  inputHint:string = 'Please input your todo item';
  todos:any[] = [];
  todo:string;

  constructor() { }

  ngOnInit() {
  }

  addTodo(todoInput:HTMLInputElement){
    this.todos.push({
      title:this.todo,
      checked:false
    });
    todoInput.value = null;
  }

  makeComplete(item){
    item.checked = true;
  }

}
