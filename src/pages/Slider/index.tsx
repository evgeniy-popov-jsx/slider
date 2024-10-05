import React from 'react';
import { observer } from 'mobx-react-lite';
import { ToolBar } from './components/toolbar';
import { sliderStore } from '../../application/stores/sliderStore';
import { Styled } from './styles';

export const Slider = observer(() => {
  const {
    currentSlide,
    prevSlide,
    nextSlide,
    startAutoPlay,
    stopAutoPlay,
    isPlaying,
    isAnimating
  } = sliderStore;

  return (
    <>
      <Styled.SliderContainer>
        <Styled.SlidesWrapper 
          $currentSlide={currentSlide}
          $isAnimating={isAnimating}
        >
          {sliderStore.slides.map((slide, index) => (
            <React.Fragment key={index}>{slide}</React.Fragment>
          ))}
        </Styled.SlidesWrapper>
      </Styled.SliderContainer>
      <ToolBar 
        prevSlide={prevSlide}
        nextSlide={nextSlide}
        startAutoplay={startAutoPlay}
        stopAutoplay={stopAutoPlay}
        isPlaying={isPlaying}
      />
    </>
  );
});
