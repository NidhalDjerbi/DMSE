import { Component, OnInit } from '@angular/core';
import {style} from "@angular/animations";

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
export class ColorsComponent implements OnInit {
  colorinit="#bc0800" ;
  color;
  constructor() { }

  ngOnInit() {
  }
  changeCol(newCol){
    this.color=newCol;
  }
  changeCol2(){
    this.color=this.colorinit;
  }
}
