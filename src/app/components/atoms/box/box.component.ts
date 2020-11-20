import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Player } from 'src/app/models/Player';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css'],
})
export class BoxComponent implements OnInit {
  @Input() row: number = 0;
  @Input() col: number = 0;
  @Output() boxClicked = new EventEmitter<{ row: number; col: number }>();

  constructor() {}

  ngOnInit(): void {}

  onClick(row: number, col: number): void {
    this.boxClicked.emit({ row, col });
  }
}
