import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
  evt:boolean
  constructor() { }

  ngOnInit() {
    this.evt=true;
  }
  modifierevt(){
    this.evt==true?this.evt=false:this.evt=true;
  }

}
