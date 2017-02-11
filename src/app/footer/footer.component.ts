import {Input, Component,  OnInit ,OnChanges,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnChanges {

  @Input() data:any[];
  @Output() clearCompleted:EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(){

  }

  fireClearCompleted(){
    this.clearCompleted.emit(true);
  }

}
