import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user/user.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  username: string;
  password: string;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  submit(): boolean {
    this.userService.authenticate(this.username, this.password);
    return false;
  }

}
