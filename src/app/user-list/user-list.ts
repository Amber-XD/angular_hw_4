import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList {
  users: { id: number; name: string; email: string }[];
  selectedUser: { id: number; name: string; email: string } | null = null;

  constructor(private userService: User) {
    this.users = this.userService.getUsers();
  }

  showUserDetails(id: number) {
    this.selectedUser = this.users.find((user) => user.id === id) || null;
  }
}
