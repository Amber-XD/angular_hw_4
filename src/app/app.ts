import { Component, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Movie } from './movie';
import { UserList } from './user-list/user-list';
import { TodoList } from './todo-list/todo-list';

@Component({
  selector: 'app-root',
  imports: [FormsModule, UserList, TodoList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  movieTitle = '';
  movieYear = '';
  movies: any[] = [];
  selectedMovie: any = null;
  fullPlot = false;
  errorMessage = '';

  constructor(
    private movieService: Movie,
    private cdr: ChangeDetectorRef,
  ) {}

  searchMovies() {
    this.errorMessage = '';
    this.movies = [];
    this.selectedMovie = null;

    if (!this.movieTitle.trim()) {
      this.errorMessage = 'Введи назву фільму.';
      return;
    }

    this.movieService.searchMovies(this.movieTitle.trim(), String(this.movieYear ?? '')).subscribe({
      next: (data) => {
        if (data.Response === 'True') {
          this.movies = [...data.Search];
        } else {
          this.errorMessage = data.Error || 'Фільми не знайдено.';
        }

        this.cdr.detectChanges();
      },
      error: () => {
        this.errorMessage = 'Помилка запиту до API.';
        this.cdr.detectChanges();
      },
    });
  }

  showMovieDetails(id: string) {
    this.movieService.getMovieDetails(id).subscribe({
      next: (data) => {
        this.selectedMovie = data;
        this.cdr.detectChanges();
      },
      error: () => {
        this.errorMessage = 'Не вдалося завантажити деталі фільму.';
      },
    });
  }
}
