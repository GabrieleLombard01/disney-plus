import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, OnChanges {
  @Input() cards: any[] = [];
  displayCards: any[] = [];
  currentIndex = 0;
  isTransitioning = false;
  visibleCards = 5;

  constructor() {}

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

  setupCarousel(): void {
    const startCards = this.cards.slice(0, this.visibleCards);
    const endCards = this.cards.slice(-this.visibleCards);
    this.displayCards = [...endCards, ...this.cards, ...startCards];
    this.currentIndex = this.visibleCards; // Inizia dalla prima card reale

    // Posticipa l'esecuzione di jumpToCard per permettere al DOM di aggiornarsi
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
    const slider = document.querySelector('.carousel-slider') as HTMLElement;
    const card = slider.querySelector('.carousel-card') as HTMLElement;
    if (!card) return; // Controllo per evitare errori se card non è ancora disponibile
    const cardWidth = card.clientWidth;
    const gap = 10;
    const totalScroll = this.currentIndex * (cardWidth + gap);
    slider.style.transition = 'transform 0.5s ease-in-out';
    slider.style.transform = `translateX(-${totalScroll}px)`;
    slider.addEventListener('transitionend', this.onTransitionEnd);
  }

  onTransitionEnd = () => {
    const slider = document.querySelector('.carousel-slider') as HTMLElement;
    slider.removeEventListener('transitionend', this.onTransitionEnd);

    if (this.currentIndex >= this.cards.length + this.visibleCards) {
      this.currentIndex = this.visibleCards;
      this.jumpToCard();
    } else if (this.currentIndex < this.visibleCards) {
      this.currentIndex = this.cards.length + this.visibleCards - 1;
      this.jumpToCard();
    }
  }

  jumpToCard(): void {
    const slider = document.querySelector('.carousel-slider') as HTMLElement;
    const card = slider.querySelector('.carousel-card') as HTMLElement;
    if (!card) return; // Controllo per evitare errori
    const cardWidth = card.clientWidth;
    const gap = 10;
    const totalScroll = this.currentIndex * (cardWidth + gap);
    slider.style.transition = 'none';
    slider.style.transform = `translateX(-${totalScroll}px)`;
  }

  getImageUrl(path: string): string {
    return `https://image.tmdb.org/t/p/w500${path}`;
  }
}
