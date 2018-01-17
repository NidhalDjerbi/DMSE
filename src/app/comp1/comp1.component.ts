import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  constructor() { }
  nom:string ;
  age:number = 24;

  ngOnInit() {
    this.nom=  'Nidhal Jbahi';
  }

  modifierNom(NewName){
    this.nom = NewName;
  }

}
