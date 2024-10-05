import React from 'react';
import { makeAutoObservable } from 'mobx';
import { slides } from '../../pages/Slider/slydes';

export class SliderStore {
  slides: React.ReactElement[] = [];
  currentSlide: number = 0;

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

}

export const sliderStore = new SliderStore(slides);
