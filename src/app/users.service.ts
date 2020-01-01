import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from './types';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  baseUrl = 'http://localhost:5000/';

  getUsers() {
    return this.http.get<User[]>(this.baseUrl);
  }

  getUser(id) {
    return this.http.get<User>(this.baseUrl + 'user/' + id);
  }
}
