import { invalid } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.scss'],
})
export class EditUsersComponent implements OnInit {
  user?: User;

  showValidationErrors: boolean;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paraMap: ParamMap) => {
      const idParam = paraMap.get('id');
      this.user = this.userService.getUser(idParam!);
    });
  }

  onFormSubmit(form: NgForm): any {
    if (form.invalid) return (this.showValidationErrors = true);

    this.userService.updateUser(this.user?.id, form.value);

    this.router.navigateByUrl('/users');
  }

  deleteUser() {
    this.userService.deleteUser(this.user?.id);
    this.router.navigateByUrl('/users');
  }
}
