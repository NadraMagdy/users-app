import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';
import * as AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users : User[] ;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.users = this.userService.getUsers();

    AOS.init({
      duration: 2000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  }

}
