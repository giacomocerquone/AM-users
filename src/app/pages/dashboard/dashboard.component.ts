import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

const Users: User[] = [
  {
    id: 1,
    username: 'Hydrogen',
    firstName: 'Alberto',
    lastName: 'Rossi',
    password: '',
  },
  {
    id: 2,
    username: 'Lastaa',
    firstName: 'Giovanni',
    lastName: 'Rossi',
    password: '',
  },
  {
    id: 3,
    username: 'Hisengard',
    firstName: 'Gianluca',
    lastName: 'Rossi',
    password: '',
  },
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor() {}

  displayedColumns: string[] = [
    'id',
    'username',
    'firstName',
    'lastName',
    'delete',
  ];
  dataSource = Users;

  ngOnInit(): void {}

  deleteUser(element: User): void {
    alert('asd');
  }
}
