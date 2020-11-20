import { Component } from '@angular/core';
import { Player } from './models/Player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currPlayer: Player = Player.CIRCLE;
  matrix = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];
  winner: Player | null = null;

  switchCurrPlayer = () =>
    (this.currPlayer =
      this.currPlayer === Player.CIRCLE ? Player.CROSS : Player.CIRCLE);

  calcWinner() {
    let transposedMatrix = [[''], [''], ['']];
    this.matrix.forEach((row, rowI) => {
      row.forEach((box, colI) => {
        transposedMatrix[colI][rowI] = box;
      });
    });

    if (
      this.matrix[1][1] !== '' &&
      ((this.matrix[0][0] === this.matrix[1][1] &&
        this.matrix[1][1] === this.matrix[2][2]) ||
        (this.matrix[0][2] === this.matrix[1][1] &&
          this.matrix[1][1] === this.matrix[2][0]))
    ) {
      alert(`${this.matrix[1][1]} win`);
      return;
    }

    if (
      this.matrix.find((row) => {
        if (
          row.every((box) => box === 'X') ||
          row.every((box) => box === 'O')
        ) {
          alert(`${row[0]} win`);
          return;
        }
      })
    ) {
    } else {
      transposedMatrix.find((row) => {
        if (
          row.every((box) => box === 'X') ||
          row.every((box) => box === 'O')
        ) {
          alert(`${row[0]} win`);
          return;
        }
      });
    }
  }

  matrixChange(event: { row: number; col: number }): void {
    if (this.matrix[event.row][event.col]) {
      alert('Non puoi assegnare nuovamente una casella');
      return;
    }
    if (this.matrix.every((row) => row.every((box) => box))) {
      // game ended
      return;
    }
    if (!this.matrix[event.row][event.col]) {
      this.matrix[event.row][event.col] = this.currPlayer;
      this.switchCurrPlayer();
    }

    this.calcWinner();
  }
}
