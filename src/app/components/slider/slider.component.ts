import { Component, Input, OnInit, OnChanges, SimpleChanges, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() cards: any[] = [];
  @ViewChild('sliderContainer', { static: false }) sliderContainer!: ElementRef;

  displayCards: any[] = [];
  currentIndex = 0;
  isTransitioning = false;
  visibleCards = 5;

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (this.cards && this.cards.length > 0) {
      this.setupCarousel();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['cards'] && this.cards && this.cards.length > 0) {
      this.setupCarousel();
    }
  }

  ngAfterViewInit(): void {
    // Dopo che la view è inizializzata, possiamo fare jumpToCard
    // se necessario. Oppure lasciare la chiamata dopo setupCarousel.
    if (this.cards && this.cards.length > 0) {
      this.jumpToCard();
    }
  }

  setupCarousel(): void {
    const startCards = this.cards.slice(0, this.visibleCards);
    const endCards = this.cards.slice(-this.visibleCards);
    this.displayCards = [...endCards, ...this.cards, ...startCards];
    this.currentIndex = this.visibleCards;

    setTimeout(() => {
      this.jumpToCard();
    }, 0);
  }

  next(): void {
    if (this.isTransitioning) return;

    this.isTransitioning = true;
    this.currentIndex++;

    this.scrollCarousel();

    setTimeout(() => {
      this.isTransitioning = false;
    }, 500);
  }

  prev(): void {
    if (this.isTransitioning) return;

    this.isTransitioning = true;
    this.currentIndex--;

    this.scrollCarousel();

    setTimeout(() => {
      this.isTransitioning = false;
    }, 500);
  }

  scrollCarousel(): void {
    const slider = this.sliderContainer.nativeElement as HTMLElement;
    const card = slider.querySelector('.carousel-card') as HTMLElement;
    if (!card) return;
    const cardWidth = card.clientWidth;
    const gap = 10;
    const totalScroll = this.currentIndex * (cardWidth + gap);
    slider.style.transition = 'transform 0.5s ease-in-out';
    slider.style.transform = `translateX(-${totalScroll}px)`;
    
    slider.removeEventListener('transitionend', this.onTransitionEnd);
    slider.addEventListener('transitionend', this.onTransitionEnd);
  }

  onTransitionEnd = () => {
    const slider = this.sliderContainer.nativeElement as HTMLElement;
    slider.removeEventListener('transitionend', this.onTransitionEnd);

    if (this.currentIndex >= this.cards.length + this.visibleCards) {
      this.currentIndex = this.visibleCards;
      this.jumpToCard();
    } else if (this.currentIndex < this.visibleCards) {
      this.currentIndex = this.cards.length + this.visibleCards - 1;
      this.jumpToCard();
    }
  };

  jumpToCard(): void {
    const slider = this.sliderContainer.nativeElement as HTMLElement;
    const card = slider.querySelector('.carousel-card') as HTMLElement;
    if (!card) return;
    const cardWidth = card.clientWidth;
    const gap = 10;
    const totalScroll = this.currentIndex * (cardWidth + gap);
    slider.style.transition = 'none';
    slider.style.transform = `translateX(-${totalScroll}px)`;
  }

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
      },
    }).then(() => {
      if (typeof window !== 'undefined') {
        window.scrollTo(0, 0);
      }
    });
  }
}
