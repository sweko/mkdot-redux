import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StateService } from '../../services/state-service';

@Component({
  selector: 'add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.css']
})
export class AddButtonComponent implements OnInit {

  value: number;

  constructor(private stateService: StateService) { }

  ngOnInit() {
    this.value = this.stateService.getState().value;
  }

  add() {
    this.stateService.executeAction({type: "increment"});
  }

}
