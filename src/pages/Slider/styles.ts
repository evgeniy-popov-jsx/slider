import styled from 'styled-components';

const SliderContainer = styled.div`
  width: 700px;
  height: 450px;
  margin: 10px;
  border: 1px solid #e1e1e1;
  border-radius: 4px;
  overflow: hidden;
`;
const SlidesWrapper = styled.div<{ $currentSlide: number }>`
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${(props) => -props.$currentSlide * 100}%);
`;

const Slide = styled.div<{ $bgColor: string }>`
  min-width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
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