import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  FamilyMovies: any[] = [];
  WhatToWatchMovies: any[] = [];
  ActionMovies: any[] = [];
  TrendingMovies: any[] = [];
  firstTitle: string = 'New to Disney+';
  secondTitle: string = 'What to Watch Tonight';
  thirdTitle: string = 'Action and Adventure';
  fourthTitle: string = 'Trending';
  apiKey: string = 'e2ff90b9990a923f82a68760dd1578d6';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadFamilyMovies();
    this.loadWhatToWatchMovies();
    this.loadActionMovies();
    this.loadTrendingMovies();
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
        this.FamilyMovies = movies.slice(0, 10);
      },
      error => {
        console.error('Errore nel recupero dei dati da TMDB:', error);
      }
    );
  }

  loadWhatToWatchMovies(): void {
    const genreId = 35; // Commedia
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&language=it-IT&with_genres=${genreId}&sort_by=popularity.desc&page=1`;

    this.http.get<any>(url).subscribe(
      data => {
        const movies = data.results;
        this.WhatToWatchMovies = movies.slice(0, 10);
      },
      error => {
        console.error('Errore nel recupero dei dati da TMDB:', error);
      }
    );
  }

  loadActionMovies(): void {
    const genreId = 28; // Azione
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&language=it-IT&with_genres=${genreId}&sort_by=popularity.desc&page=1`;

    this.http.get<any>(url).subscribe(
      data => {
        const movies = data.results;
        this.ActionMovies = movies.slice(0, 10);
      },
      error => {
        console.error('Errore nel recupero dei dati da TMDB:', error);
      }
    );
  }

  loadTrendingMovies(): void {
    const genreId = 878; // Fantascienza
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&language=it-IT&with_genres=${genreId}&sort_by=popularity.desc&page=1`;

    this.http.get<any>(url).subscribe(
      data => {
        const movies = data.results;
        this.TrendingMovies = movies.slice(0, 10);
      },
      error => {
        console.error('Errore nel recupero dei dati da TMDB:', error);
      }
    );
  }
}
