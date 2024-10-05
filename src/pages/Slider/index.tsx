import { observer } from 'mobx-react-lite';
import { ToolBar } from './components/toolbar';
import { Styled } from './styles';
import { sliderStore } from '../../application/stores/sliderStore';
import React from 'react';

export const Slider = observer(() => {
  const { currentSlide, prevSlide, nextSlide } = sliderStore;

  return (
    <>
      <Styled.SliderContainer>
        <Styled.SlidesWrapper $currentSlide={currentSlide}>
          {sliderStore.slides.map((slide, index) => (
            <React.Fragment key={index}>{slide}</React.Fragment>
          ))}
        </Styled.SlidesWrapper>
      </Styled.SliderContainer>
      <ToolBar 
        prevSlide={prevSlide}
        nextSlide={nextSlide}
      />
    </>
  );
});
