import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  @Input() cards: any[] = [];

  constructor(private router: Router) {}

  ngOnInit() {}

  getImageUrl(path: string): string {
    return `https://image.tmdb.org/t/p/w500${path}`;
  }

  onCardClick(card: any): void {
    this.router.navigate(['/slide-detail'], {
      queryParams: {
        title: card.title,
        poster_path: card.poster_path,
        description: card.overview,
        genres: card.genre_ids?.join(','),
        runtime: card.runtime,
        release_date: card.release_date,
      }
    }).then(() => {
      if (typeof window !== 'undefined') {
        window.scrollTo(0, 0);
      }
    });
  }
}
