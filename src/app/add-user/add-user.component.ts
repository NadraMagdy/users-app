import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  showValidationErrors : boolean;

  constructor(private userService:UserService , private router: Router) { }

  ngOnInit(): void {
  }

  onFormSubmit(form: NgForm):any {
    console.log(form)

    if(form.invalid) return this.showValidationErrors = true

    const user = new User(form.value.imagePath,form.value.name,form.value.code);

    this.userService.addUser(user);
    this.router.navigateByUrl("/users");
  }

}
