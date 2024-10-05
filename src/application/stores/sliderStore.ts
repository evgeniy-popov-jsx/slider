import React from 'react';
import { makeAutoObservable } from 'mobx';
import { slides } from '../../pages/Slider/slydes';

export class SliderStore {
  slides: React.ReactElement[] = [];
  currentSlide: number = 0;
  isPlaying: boolean = false;
  intervalId: ReturnType<typeof setInterval> | null = null;

  constructor (slides: React.ReactElement[]) {
    this.slides = slides;
    makeAutoObservable(this);
  }

  nextSlide = () => {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  };

  prevSlide = () => {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  };

  startAutoPlay = () => {
    this.isPlaying = true;
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  stopAutoPlay = () =>  {
    this.isPlaying = false;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
}

export const sliderStore = new SliderStore(slides);
