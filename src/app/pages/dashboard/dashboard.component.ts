import { Component, OnInit } from '@angular/core';
import { concatMap, tap } from 'rxjs/operators';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  users: User[] = [];

  myColumns: string[] = ['id', 'firstName', 'lastName', 'delete'];

  constructor(private us: UserService) {}

  ngOnInit(): void {
    this.us.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  deleteUser(element: User) {
    this.us
      .deleteUser(element)
      .pipe(
        tap((element: User) => {
          alert(`Utente ${element.username} cancellato`);
        }),
        concatMap((element: User) => {
          return this.us.getUsers();
        }),
        tap((users: User[]) => {
          this.users = users;
        })
      )
      .subscribe();
  }
}
