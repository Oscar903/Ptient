import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  public user: User;
  constructor(private _userService: UserService, private router: Router) {

  }

  ngOnInit(): void {
  }

  public btnLogin() {
        this.router.navigate(['/records']);
  }

}
