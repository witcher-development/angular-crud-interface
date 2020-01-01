import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';
import { User } from '../types';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit {
  constructor(private route: ActivatedRoute, private api: UsersService) {}

  user: User = {
    _id: {
      $oid: '',
    },
    name: '',
  };

  ngOnInit() {
    this.route.params.subscribe(({ id }) => {
      this.api.getUser(id).subscribe((user) => (this.user = user));
    });
  }
}
