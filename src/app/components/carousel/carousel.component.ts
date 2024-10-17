import { animate, state, style, transition, trigger } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

interface Slide {
  id: number;
  src: string;
}

interface Cover {
  id: number;
  src: string;
}

interface CarouselData {
  slides: Slide[];
  covers: Cover[];
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger('slideAnimation', [
      state('left', style({ transform: 'translateX(-100%)' })),
      state('center', style({ transform: 'translateX(0)' })),
      state('right', style({ transform: 'translateX(100%)' })),
      transition('center => left', [animate('0.5s ease-in')]),
      transition('left => center', [animate('0.5s ease-out')]),
      transition('center => right', [animate('0.5s ease-in')]),
      transition('right => center', [animate('0.5s ease-out')]),
    ]),
  ]
  
})
export class CarouselComponent {

  slides: Slide[] = [];
  covers: Cover[] = [];
  currentIndex = 0;
  urlData: string = '/assets/data/carouselData.json';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchData();
  }

  get currentSlide() {
    return this.slides[this.currentIndex];
  }

  fetchData(): void {
    this.http.get<CarouselData>(this.urlData).subscribe((data) => {
      this.slides = data.slides;
      this.covers = data.covers;
    });
  }

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prev(): void {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

}
