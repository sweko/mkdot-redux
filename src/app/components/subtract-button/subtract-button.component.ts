import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StateService } from '../../services/state-service';

@Component({
  selector: 'subtract-button',
  templateUrl: './subtract-button.component.html',
  styleUrls: ['./subtract-button.component.css']
})
export class SubtractButtonComponent implements OnInit {

  value: number;

  constructor(private stateService: StateService) { }

  ngOnInit() {
    this.value = this.stateService.getState().value;
  }

  subtract() {
    this.stateService.executeAction({type: "decrement"});
  }

}
