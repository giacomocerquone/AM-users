import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Player } from 'src/app/models/Player';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  @Input() currPlayer: Player = Player.CIRCLE;
  @Input() matrix: Array<Array<string>> = [[], [], []];
  @Output() matrixChange = new EventEmitter<{ row: number; col: number }>();

  constructor() {}

  ngOnInit(): void {}

  boxClicked(event: { row: number; col: number }): void {
    this.matrixChange.emit(event);
  }
}
