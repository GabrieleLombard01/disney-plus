import { HttpClient } from '@angular/common/http';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-slideDetail',
  templateUrl: './slideDetail.component.html',
  styleUrls: ['./slideDetail.component.scss'],
})
export class SlideDetailComponent implements OnInit {
  @ViewChild('modalContent') modalContent!: TemplateRef<any>;
  title: string | null = null;
  posterPath: string | null = null;
  description: string | null = null;
  genres: string[] = [];
  runtime: number | null = null;
  releaseDate: string | null = null;
  backdropPath: string | null = null;
  ageRating: string | null = null;
  playString: string = 'PLAY';
  trailerString: string = 'TRAILER';
  randomMovies: any[] = [];
  apiKey: string = 'e2ff90b9990a923f82a68760dd1578d6';
  suggestedString: string = 'Suggeriti per te';
  dynamicContent = `<p>Questo sito fa parte di un'esercitazione personale. Pertanto non è possibile riprodurre il video selezionato. Per poter riprodurre correttamente i contenuti di Disney +, recatevi sul loro sito: <a target=”_blank” href="https://www.disneyplus.com/" class="text-blue-900 font-bold hover:underline">clicca qui per il sito originale!</a></p>`;



  // Mappa dei generi
  genreMap: { [key: string]: string } = {
    '28': 'Azione',
    '12': 'Avventura',
    '16': 'Animazione',
    '35': 'Commedia',
    '80': 'Crimine',
    '99': 'Documentario',
    '18': 'Dramma',
    '10751': 'Famiglia',
    '14': 'Fantasy',
    '36': 'Storico',
    '27': 'Horror',
    '10402': 'Musica',
    '9648': 'Mistero',
    '10749': 'Romantico',
    '878': 'Fantascienza',
    '10770': 'Film TV',
    '53': 'Thriller',
    '10752': 'Guerra',
    '37': 'Western',
  };
  
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.loadRandomMovies();
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
    this.route.queryParams.subscribe(params => {
      this.title = params['title'];
      this.posterPath = params['poster_path'];
      this.description = params['description'] || 'Descrizione non disponibile'; // Valore predefinito
      this.genres = params['genres']
      ? params['genres'].split(',').map((id: string) => this.genreMap[id.trim()] || 'Sconosciuto')
      : [];
      this.runtime = params['runtime'] ? +params['runtime'] : null;
      this.releaseDate = params['release_date'] || null;
      this.backdropPath = params['backdrop_path'];
      this.ageRating = params['age_rating'] || 'Età non specificata';
    });
  }

  getImageUrl(path: string): string {
    return `https://image.tmdb.org/t/p/w500${path}`;
  }

  loadRandomMovies(): void {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&language=it-IT&sort_by=popularity.desc&page=${this.getRandomPage()}`;
    this.http.get<any>(url).subscribe(
      (data) => {
        const shuffled = data.results.sort(() => Math.random() - 0.5);
        this.randomMovies = shuffled.slice(0, 10);
      },
      (error) => {
        console.error('Errore nel recupero dei film casuali:', error);
      }
    );
  }

  getRandomPage(): number {
    return Math.floor(Math.random() * 500) + 1;
  }

  openModal() {
    this.modalService.openModal('ATTENZIONE', this.dynamicContent);
  }
  
}
