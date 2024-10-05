import { Styled } from './styles';

export const ToolBar = () => {
 return (
  <Styled.Container>
    <Styled.Button>{'<'}</Styled.Button>
    <Styled.Button>play</Styled.Button>
    <Styled.Button>stop</Styled.Button>
    <Styled.Button>{'>'}</Styled.Button>
  </Styled.Container>
 );
};
