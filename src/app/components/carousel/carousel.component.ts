import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

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

  slides = [
    { id: 1, src: 'assets/images/home/shark.png' },
    { id: 2, src: 'assets/images/home/simpson.png' },
    { id: 3, src: 'assets/images/home/marvel.png' },
    { id: 4, src: 'assets/images/home/coco.png' },
    { id: 5, src: 'assets/images/home/other.png' }
    
  ];
  cover= [
    { id: 1, src: 'assets/images/home/natgeo_logo.png' },
    { id: 2, src: 'assets/images/home/simpsons_logo.png' },
    { id: 3, src: 'assets/images/home/marvel_logo.png' },
    { id: 4, src: 'assets/images/home/coco_logo.png' },
    { id: 5, src: 'assets/images/home/more_logo.png' }
  ]

  currentIndex = 0;

  get currentSlide() {
    return this.slides[this.currentIndex];
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }
  
  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }
  

}
