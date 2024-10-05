import styled from 'styled-components';

const SliderContainer = styled.div`
  width: 700px;
  height: 450px;
  margin: 10px;
  border-radius: 8px;
  overflow: hidden;
`;
const SlidesWrapper = styled.div<{ $currentSlide: number, $isAnimating: boolean }>`
  display: flex;
  width: 100%;
  height: 100%;
  transition: ${(props) => (props.$isAnimating ? 'transform 0.5s ease-in-out' : 'none')};
  transform: translateX(${(props) => -props.$currentSlide * 100}%);
`;

const Slide = styled.div<{ $bgColor: string }>`
  min-width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  font-family: Arial;
  justify-content: center;
  font-size: 24px;
  color: white;
  background: ${(props) => props.$bgColor};
`

export const Styled = {
  SliderContainer,
  SlidesWrapper,
  Slide
};