import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Todo {
  todos = [
    { id: 1, title: 'Вивчити Angular', completed: false },
    { id: 2, title: 'Зробити домашку', completed: true },
    { id: 3, title: 'Повторити TypeScript', completed: false },
  ];

  getTodos() {
    return this.todos;
  }

  updateTodoStatus(id: number, isCompleted: boolean) {
    const todo = this.todos.find((todo) => todo.id === id);

    if (todo) {
      todo.completed = isCompleted;
    }
  }
}
