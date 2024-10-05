import React from 'react';
import { makeAutoObservable, action, runInAction } from 'mobx';
import { slides } from '../../pages/Slider/components/slides';

class SliderStore {
  slides: React.ReactElement[] = [];
  currentSlide: number = 1;
  isPlaying: boolean = false;
  isAnimating: boolean = true;
  intervalId: ReturnType<typeof setInterval> | null = null;

  constructor (slides: React.ReactElement[]) {
    this.slides = [slides[slides.length - 1], ...slides, slides[0]]; 
    makeAutoObservable(this, {
      nextSlide: action,
      prevSlide: action,
      startAutoPlay: action,
      stopAutoPlay: action,
    });
  }

  pauseIfPlaying = () => {
    if (this.isPlaying) {
      this.stopAutoPlay();
    }
  }
  
  nextSlide = ( isAuto = false ) => {
    if (isAuto) {
      this.pauseIfPlaying();
    }

    this.isAnimating = true;
    this.currentSlide += 1;


    if (this.currentSlide === this.slides.length - 1) {
      setTimeout(() => {
        runInAction(() => {
          this.isAnimating = false;
          this.currentSlide = 1;
        });
      }, 500);
    }
  };

  prevSlide = ( isAuto = false ) => {
    if (isAuto) {
      this.pauseIfPlaying();
    }

    this.isAnimating = true;
    this.currentSlide -= 1;

    if (this.currentSlide === 0) {
      setTimeout(() => {
        runInAction(() => {
          this.isAnimating = false;
          this.currentSlide = this.slides.length - 2;
        });
      }, 500);
    }
  };

  startAutoPlay = () => {
    this.isPlaying = true;
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 1200);
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
