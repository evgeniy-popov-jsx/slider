import { Styled } from './styles';

interface ToolBarProps {
  prevSlide: () => void;
  nextSlide: () => void;
  startAutoplay: () => void;
  stopAutoplay: () => void;
  isPlaying: boolean;
}

export const ToolBar: React.FC<ToolBarProps> = ({ prevSlide, nextSlide, startAutoplay, stopAutoplay, isPlaying }) => {
 return (
  <Styled.Container>
    <Styled.Button onClick={prevSlide} >{'<'}</Styled.Button>
    {isPlaying 
      ? <Styled.Button onClick={stopAutoplay} >пауза</Styled.Button>
      : <Styled.Button onClick={startAutoplay} >старт</Styled.Button>
    }
    <Styled.Button onClick={nextSlide} >{'>'}</Styled.Button>
  </Styled.Container>
 );
};
