import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp2',
  template: `
    <p>
      comp2 works!
      <ng-content></ng-content>
    </p>
    
  `,
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
