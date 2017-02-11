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

}
