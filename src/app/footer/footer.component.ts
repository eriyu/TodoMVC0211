import {Input, Component,  OnInit ,OnChanges} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnChanges {

  @Input() data:any[];

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(){

  }

}
