import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class User {
  users = [
    { id: 1, name: 'Billie Joe Armstrong', email: 'billie@example.com' },
    { id: 2, name: 'Mike Dirnt', email: 'mike@example.com' },
    { id: 3, name: 'Tré Cool', email: 'tre@example.com' },
  ];

  getUsers() {
    return this.users;
  }
}
