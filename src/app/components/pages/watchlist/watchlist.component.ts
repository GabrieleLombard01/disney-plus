import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss']
})
export class WatchlistComponent implements OnInit {
  title: string = 'Watchlist';
  subtitle: string = 'My Movies & Series';
  familyMovies: any[] = [];
  apiKey: string = 'e2ff90b9990a923f82a68760dd1578d6';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadFamilyMovies();
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }

  loadFamilyMovies(): void {
    const genreId = 10751; // Famiglia
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&language=it-IT&with_genres=${genreId}&sort_by=popularity.desc&page=1`;

    this.http.get<any>(url).subscribe(
      data => {
        const movies = data.results;
        this.familyMovies = movies.slice(0, 20);
      },
      error => {
        console.error('Errore nel recupero dei dati da TMDB:', error);
      }
    );
  }
}
