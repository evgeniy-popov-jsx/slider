import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #1b1b1b;
`;

const SliderContainer = styled.div`
  width: 700px;
  height: 450px;
  margin: 10px;
  border: 1px solid #e1e1e1;
  border-radius: 4px;
  overflow: hidden;
`;
const SlidesWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 0.5s ease-in-out;
  transform: translateX(-100%);
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
  Container,
  SliderContainer,
  SlidesWrapper,
  Slide
};