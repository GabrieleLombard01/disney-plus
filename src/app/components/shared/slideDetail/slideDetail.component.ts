import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-slideDetail',
  templateUrl: './slideDetail.component.html',
  styleUrls: ['./slideDetail.component.scss'],
})
export class SlideDetailComponent implements OnInit {

  title: string | null = null;
  posterPath: string | null = null;
  description: string | null = null;
  genres: string[] = [];
  runtime: number | null = null;
  releaseDate: string | null = null;
  backdropPath: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.title = params['title'];
      this.posterPath = params['poster_path'];
      this.description = params['description'] || 'N/A'; // Valore predefinito
      this.genres = params['genres'] ? params['genres'].split(',') : [];
      this.runtime = params['runtime'] ? +params['runtime'] : null;
      this.releaseDate = params['release_date'] || null;
      this.backdropPath = params['backdrop_path'];
    });
  }

  getImageUrl(path: string): string {
    return `https://image.tmdb.org/t/p/w500${path}`;
  }

}
