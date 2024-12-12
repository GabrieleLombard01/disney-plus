import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpinnerService } from 'src/app/services/spinner/spinner.service';

interface Genre {
  id: number;
  name: string;
}

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  randomMovies: any[] = [];
  apiKey: string = 'e2ff90b9990a923f82a68760dd1578d6';
  selectedGenreId: number | null = null;
  title: string = 'Movies';
  firstOption: string = 'I più visti';


  genres: Genre[] = [
    { id: 28,    name: 'Azione' },
    { id: 12,    name: 'Avventura' },
    { id: 16,    name: 'Animazione' },
    { id: 35,    name: 'Commedia' },
    { id: 80,    name: 'Crime' },
    { id: 18,    name: 'Dramma' },
    { id: 10751, name: 'Famiglia' },
    { id: 14,    name: 'Fantasy' },
    { id: 36,    name: 'Storia' },
    { id: 27,    name: 'Horror' },
    { id: 10402, name: 'Musica' },
    { id: 9648,  name: 'Mistero' },
    { id: 10749, name: 'Romantico' },
    { id: 878,   name: 'Fantascienza' },
    { id: 53,    name: 'Thriller' },
    { id: 10752, name: 'Guerra' },
  ];

  constructor(
    private http: HttpClient,
    private spinnerService: SpinnerService
  ) {}

  ngOnInit() {
    // Carica la pagina inizialmente senza filtri
    this.loadRandomMovies();
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }

  loadRandomMovies(genreId?: number): void {
    this.spinnerService.show();
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&language=it-IT&sort_by=popularity.desc&page=1`;
    if (genreId) {
      url += `&with_genres=${genreId}`;
    }

    this.http.get<any>(url).subscribe(
      data => {
        const movies = data.results;
        // Primi 20 film
        this.randomMovies = movies.slice(0, 20);
        this.spinnerService.hide();
      },
      error => {
        console.error('Errore nel recupero dei dati da TMDB:', error);
        this.spinnerService.hide();
      }
    );
  }

  onGenreChange(event: any): void {
    const selectedValue = event.target.value;
    this.selectedGenreId = selectedValue ? +selectedValue : null;
    this.loadRandomMovies(this.selectedGenreId || undefined);
  }
}
