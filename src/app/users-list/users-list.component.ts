import { Component, OnInit } from '@angular/core';

import { UsersService } from '../users.service';
import { User } from '../types';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  constructor(private api: UsersService) {}

  users: User[] = [];

  ngOnInit() {
    this.api.getUsers().subscribe((users) => (this.users = users));
  }
}
