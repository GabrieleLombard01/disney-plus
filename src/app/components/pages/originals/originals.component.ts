import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-originals',
  templateUrl: './originals.component.html',
  styleUrls: ['./originals.component.scss']
})
export class OriginalsComponent implements OnInit {
  title: string = 'ORIGINALS';
  firstSubtitle: string = 'Featured';
  secondSubtitle: string = 'Series';
  thirdSubtitle: string = 'Movies';
  fourthSubtitle: string = 'Shorts';

  apiKey: string = 'e2ff90b9990a923f82a68760dd1578d6';

  featuredMovies: any[] = [];
  series: any[] = [];
  movies: any[] = [];
  shorts: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadFeatured();
    this.loadSeries();
    this.loadMovies();
    this.loadShorts();
  }

  loadFeatured(): void {
    // Trending movie day
    const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${this.apiKey}&language=it-IT`;
    this.http.get<any>(url).subscribe(
      data => {
        this.featuredMovies = data.results.slice(0, 10);
      },
      error => {
        console.error('Errore nel recupero dei dati trending:', error);
      }
    );
  }

  loadSeries(): void {
    // Serie TV popolari
    const url = `https://api.themoviedb.org/3/tv/popular?api_key=${this.apiKey}&language=it-IT&page=1`;
    this.http.get<any>(url).subscribe(
      data => {
        this.series = data.results.slice(0, 10);
      },
      error => {
        console.error('Errore nel recupero dei dati serie TV:', error);
      }
    );
  }

  loadMovies(): void {
    // Film popolari
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=it-IT&page=1`;
    this.http.get<any>(url).subscribe(
      data => {
        this.movies = data.results.slice(0, 10);
      },
      error => {
        console.error('Errore nel recupero dei dati film popolari:', error);
      }
    );
  }

  loadShorts(): void {
    // "Shorts" - assumiamo animazione (genere 16) come esempio
    const genreId = 16; 
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&language=it-IT&with_genres=${genreId}&sort_by=popularity.desc&page=1`;
    this.http.get<any>(url).subscribe(
      data => {
        this.shorts = data.results.slice(0, 10);
      },
      error => {
        console.error('Errore nel recupero dei dati shorts:', error);
      }
    );
  }
}
