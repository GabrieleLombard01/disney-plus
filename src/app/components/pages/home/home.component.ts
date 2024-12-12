import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  FamilyMovies: any[] = [];
  apiKey: string = 'e2ff90b9990a923f82a68760dd1578d6';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadMovies();
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }

  loadMovies(): void {
    const genreId = 10751; // ID del genere "famiglia"
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&language=it-IT&with_genres=${genreId}&sort_by=popularity.desc&page=1`;

    this.http.get<any>(url).subscribe(
      data => {
        const movies = data.results;
        // Prendi i primi 10 film del genere "famiglia"
        this.FamilyMovies = movies.slice(0, 10);
      },
      error => {
        console.error('Errore nel recupero dei dati da TMDB:', error);
      }
    );
  }
}
