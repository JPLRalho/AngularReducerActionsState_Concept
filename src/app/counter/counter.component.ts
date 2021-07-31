import { appState } from './../state/app.state';
import *  as action from './../action/app.action';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  counter!: number;

  constructor() { }

  ngOnInit(): void {
    this.counter = action.getCounterAction()
  }

  onAdd(){
    this.counter = action.incrementAction(this.counter);
  }

  onSubtracted(){
    this.counter = action.decrementAction(this.counter);
  }
}
