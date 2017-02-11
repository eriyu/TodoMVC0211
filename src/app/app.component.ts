import {Http} from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

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

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getTodos();
  }

  getTodos(){
    this.dataService
      .getTodos()
      .subscribe((data) => {
        this.todos = data;
      });
  }

  addTodo(todoInput:HTMLInputElement){
    // this.todos.push({
    //   title:this.todo,
    //   done:false
    // });
    this.todos = [...this.todos,{
      title:this.todo,
      done:false
    }];
    todoInput.value = null;
  }

  removeTodo(itemidx){
    this.todos.splice(itemidx,1);
    this.todos = [...this.todos];
  }

  toggleComplete(item){
    item.done = !item.done;
  }

  doClearCompleted(isCompleted){
    if(isCompleted){
      this.todos = this.todos.filter((item) => {
        return (item.done) ? false : true;
      });
    }
  }

  doFilterData(actioncode){
    this.action = actioncode;
  }

  toggleAll(status:boolean){
    this.todos = this.todos.map((item) => {
      item.done = status;
      return item;
    });
  }

}
