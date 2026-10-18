import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environments';

@Injectable({
  providedIn: 'root',
})
export class Movie {
  private apiKey = environment.omdbApiKey;
  private apiUrl = 'https://www.omdbapi.com/';

  constructor(private http: HttpClient) {}

  searchMovies(title: string, year: string = ''): Observable<any> {
    let url = `${this.apiUrl}?apikey=${this.apiKey}&s=${encodeURIComponent(title)}&type=movie`;

    const yearValue = String(year ?? '').trim();

    if (yearValue !== '') {
      url += `&y=${encodeURIComponent(yearValue)}`;
    }

    return this.http.get(url);
  }

  getMovieDetails(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?apikey=${this.apiKey}&i=${id}&plot=short`);
  }
}

