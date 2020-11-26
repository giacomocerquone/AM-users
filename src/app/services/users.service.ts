import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, of, throwError } from 'rxjs';
import { User } from '../models/User';
import { find, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  loggedInUser?: User;

  login(username: string, password: string): Observable<User | Error> {
    return this.http.get<User[]>('http://localhost:3000/users').pipe(
      map((users: User[]) => {
        const user = users.find(
          (u: User) => u.password === password && u.username === username
        );
        if (user) {
          this.loggedInUser = user;
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
        this.loggedInUser = data;
      })
    );
  }

  logout(): void {
    this.loggedInUser = undefined;
  }
}
