import { Component } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  imports: [],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList {
  todos: { id: number; title: string; completed: boolean }[];
  filter = 'all';

  constructor(private todoService: Todo) {
    this.todos = this.todoService.getTodos();
  }

  updateTodoStatus(id: number, isCompleted: boolean) {
    this.todoService.updateTodoStatus(id, isCompleted);
  }
}
