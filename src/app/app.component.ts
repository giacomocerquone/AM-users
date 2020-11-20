import { Component } from '@angular/core';
import { Player } from './models/Player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public currPlayer: Player = Player.CIRCLE;

  public matrix = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];

  switchCurrPlayer = () =>
    (this.currPlayer =
      this.currPlayer === Player.CIRCLE ? Player.CROSS : Player.CIRCLE);

  matrixChange(event: { row: number; col: number }): void {
    if (!this.matrix[event.row][event.col]) {
      this.matrix[event.row][event.col] = this.currPlayer;
      this.switchCurrPlayer();
      console.log(this.matrix);
      console.log(this.currPlayer);
    } else {
      alert("Non puoi assegnare nuovamente una casella")
    }
  }
}
