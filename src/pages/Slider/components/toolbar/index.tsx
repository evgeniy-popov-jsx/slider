import { Styled } from './styles';

interface ToolBarProps {
  prevSlide: () => void;
  nextSlide: () => void;
  startAutoplay: () => void;
  stopAutoplay: () => void;
}

export const ToolBar: React.FC<ToolBarProps> = ({ prevSlide, nextSlide, startAutoplay, stopAutoplay }) => {
 return (
  <Styled.Container>
    <Styled.Button onClick={prevSlide} >{'<'}</Styled.Button>
    <Styled.Button onClick={startAutoplay} >play</Styled.Button>
    <Styled.Button onClick={stopAutoplay} >stop</Styled.Button>
    <Styled.Button onClick={nextSlide} >{'>'}</Styled.Button>
  </Styled.Container>
 );
};
