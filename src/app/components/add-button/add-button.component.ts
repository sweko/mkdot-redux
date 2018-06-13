import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.css']
})
export class AddButtonComponent implements OnInit {

  @Input() value: number;
  @Output() clicked: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  add() {
    this.clicked.emit(this.value + 1);
  }

}
