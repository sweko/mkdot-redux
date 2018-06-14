import { Component, OnInit, Input } from '@angular/core';
import { StateService } from '../../services/state-service';

@Component({
  selector: 'show-number',
  templateUrl: './show-number.component.html',
  styleUrls: ['./show-number.component.css']
})
export class ShowNumberComponent {

  value: number;

  constructor(private stateService: StateService) {
    this.stateService.registerListener(() => {
      this.displayStateValue();
    });

  }

  displayStateValue() {
    const state = this.stateService.getState();
    this.value = state.value;
  }

}
