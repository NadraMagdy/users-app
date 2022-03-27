import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUsersComponent } from './edit-users/edit-users.component';
import { UsersComponent } from './users/users.component';

export const routes: Routes = [
  {path: 'users' , component: UsersComponent},
  {path: 'users/add' , component: AddUserComponent},
  {path: 'users/:id' , component: EditUsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
