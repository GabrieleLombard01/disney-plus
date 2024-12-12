import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpinnerService } from 'src/app/services/spinner/spinner.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchQuery: string = '';
  displayedMovies: any[] = [];
  apiKey: string = 'e2ff90b9990a923f82a68760dd1578d6';
  title: string = 'Explore'

  constructor(
    private http: HttpClient, 
    private spinnerService: SpinnerService
  ) { }

  ngOnInit() {
    this.loadRandomMovies();
  }

  loadRandomMovies(): void {
    this.spinnerService.show();
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&language=it-IT&sort_by=popularity.desc&page=1`;
    this.http.get<any>(url).subscribe(
      data => {
        const movies = data.results;
        this.displayedMovies = movies.slice(0, 20);
        this.spinnerService.hide();
      },
      error => {
        console.error('Errore nel recupero dei dati da TMDB:', error);
        this.displayedMovies = [];
        this.spinnerService.hide();
      }
    );
  }

  onSearch(): void {
    const query = this.searchQuery.trim();

    // Se l'utente non inserisce nulla, carichiamo di nuovo i film random
    if (!query) {
      this.loadRandomMovies();
      return;
    }

    this.spinnerService.show();
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&language=it-IT&query=${encodeURIComponent(query)}&page=1`;
    this.http.get<any>(url).subscribe(
      data => {
        this.displayedMovies = data.results || [];
        this.spinnerService.hide();
      },
      error => {
        console.error('Errore nel recupero dei dati da TMDB:', error);
        this.displayedMovies = [];
        this.spinnerService.hide();
      }
    );
  }
}
