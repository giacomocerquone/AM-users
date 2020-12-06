import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  loggedInUser: User | null = null;

  constructor(private http: HttpClient, private router: Router) {
    const user = localStorage.getItem('user');
    console.log(user);
    if (user) {
      this.loggedInUser = JSON.parse(user);
    }
  }

  login(username: string, password: string): Observable<User | Error> {
    return this.http.get<User[]>('http://localhost:3000/users').pipe(
      map((users: User[]) => {
        const user = users.find(
          (user) => user.password === password && user.username === username
        );
        if (user) {
          this.loggedInUser = user;
          this.router.navigate(['dashboard']);
          localStorage.setItem('user', JSON.stringify(user));
          return user;
        }
        return new Error('No user found');
      })
    );
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/users');
  }

  signup(): void {}

  logout(): void {
    this.loggedInUser = null;
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }

  deleteUser(user: User) {
    return this.http.delete<User>(`http://localhost:3000/users/${user.id}`);
  }
}
