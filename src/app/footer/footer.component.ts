import {Input, Component,  OnInit ,OnChanges,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnChanges {

  @Input() data:any[];
  @Output() clearCompleted:EventEmitter<any> = new EventEmitter();
  @Output() filterData:EventEmitter<any> = new EventEmitter();

  actions:any[] = [
    {
      'code':'All',
      'selected':false
    },
    {
      'code':'Active',
      'selected':false
    },
    {
      'code':'Completed',
      'selected':false
    }
  ];

  constructor() {
    this.makeActionSelected('All');
  }

  ngOnInit() {

  }

  ngOnChanges(){

  }

  fireClearCompleted(){
    this.clearCompleted.emit(true);
  }

  fireDoFilter(actioncode){
    this.makeActionSelected(actioncode);
    this.filterData.emit(actioncode);
  }

  makeActionSelected(actioncode){
    this.actions = this.actions.map((item) => {
      item.selected = false;
      if(actioncode === item.code){
        item.selected = true;
      }
      return item;
    });
  }

}
