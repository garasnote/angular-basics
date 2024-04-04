import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h1>Counter Component</h1>
  <h3>counter: {{counter}}</h3>

  <button (click)="increaseBy(1)">+1</button>
  <button (click)="increaseBy(10,true)">Reset</button>
  <button (click)="increaseBy(-1)">-1</button>
  `

})

export class CounterComponent implements OnInit {
  public counter:number = 10;

  increaseBy(value:number, set?:boolean ):void {
    if(typeof(set)=='undefined'){
      this.counter+=value;
    } else {
      this.counter = value;
    }
  }
  setCounter(value:number):void {
    this.counter = value;
  }

  constructor() { }

  ngOnInit() { }
}
