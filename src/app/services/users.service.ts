import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, of, throwError } from 'rxjs';
import { User } from '../models/User';
import { find, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  loggedInUser?: User;

  constructor(private http: HttpClient, private router: Router) {
    if (localStorage.getItem('user')) {
      const user = localStorage.getItem('user') || '';
      this.loggedInUser = JSON.parse(user);
    }
  }

  login(username: string, password: string): Observable<User | Error> {
    return this.http.get<User[]>('http://localhost:3000/users').pipe(
      map((users: User[]) => {
        const user = users.find(
          (u: User) => u.password === password && u.username === username
        );
        if (user) {
          this.loggedInUser = user;
          this.router.navigate(['dashboard']);
          localStorage.setItem('user', JSON.stringify(user));
          return user;
        } else {
          return new Error('No user found');
        }
      })
    );
  }

  signup(data: {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
  }): Observable<void> {
    return this.http.post<void>('http://localhost:3000/users', data).pipe(
      tap((res) => {
        console.log(res);
        this.loggedInUser = { ...data, id: Date.now() };
        alert('La registrazione è avvenuta con successo, fai login!');
        this.router.navigate(['login']);
      })
    );
  }

  logout(): void {
    localStorage.removeItem('user');
    this.loggedInUser = undefined;
    this.router.navigate(['/login']);
  }
}
