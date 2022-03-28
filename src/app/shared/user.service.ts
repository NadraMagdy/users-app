import { Injectable, OnDestroy } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User[] = [];

  constructor() {
    this.loadState();
  }

  getUsers() {
    return this.users;
  }

  getUser(id?: string) {
    return this.users.find((n) => n.id === id);
  }

  addUser(user: User) {
    this.users.push(user);

    this.saveState();
  }

  updateUser(id?: string, updatedFields?: Partial<User>) {
    const user = this.getUser(id);
    Object.assign(user, updatedFields);

    this.saveState();
  }

  deleteUser(id?: string) {
    const userIndex = this.users.findIndex((n) => n.id === id);
    if (userIndex == -1) return;
    this.users.splice(userIndex, 1);

    this.saveState();
  }

  saveState() {
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  loadState() {
    try {

      const usersInStorage = JSON.parse(localStorage.getItem('users') || '[]');
      if (!usersInStorage) return;
      this.users = usersInStorage;

    } catch (error) {

      console.log("There Was an error retrieving the users from localStorage");
      console.log(error);

    }
  }
}
