import { Styled } from './styles';

interface ToolBarProps {
  prevSlide: () => void;
  nextSlide: () => void;
}

export const ToolBar: React.FC<ToolBarProps> = ({ prevSlide, nextSlide }) => {
 return (
  <Styled.Container>
    <Styled.Button onClick={prevSlide} >{'<'}</Styled.Button>
    <Styled.Button>play</Styled.Button>
    <Styled.Button>stop</Styled.Button>
    <Styled.Button onClick={nextSlide} >{'>'}</Styled.Button>
  </Styled.Container>
 );
};
