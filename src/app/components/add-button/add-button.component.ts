import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StateManager, ActionType } from '../../services/state-manager';

@Component({
  selector: 'add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.css']
})
export class AddButtonComponent implements OnInit {

  constructor(private stateManager: StateManager) { }

  ngOnInit() {
  }

  add() {
    this.stateManager.executeAction({type: ActionType.Increment});
  }

}
