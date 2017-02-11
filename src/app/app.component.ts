import {Http} from '@angular/http';
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
  action:string = 'All';

  constructor(private http:Http) { }

  ngOnInit() {
  }

  addTodo(todoInput:HTMLInputElement){
    this.todos.push({
      title:this.todo,
      checked:false
    });
    todoInput.value = null;
  }

  removeTodo(itemidx){
    this.todos.splice(itemidx,1);
  }

  toggleComplete(item){
    item.checked = !item.checked;
  }

  doClearCompleted(isCompleted){
    if(isCompleted){
      this.todos = this.todos.filter((item) => {
        return (item.checked) ? false : true;
      });
    }
  }

  doFilterData(actioncode){
    this.action = actioncode;
  }

  toggleAll(){
    this.todos = this.todos.map((item) => {
      item.checked = !item.checked;
      return item;
    });
  }

}
