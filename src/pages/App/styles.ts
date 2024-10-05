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
`;

export const Styled = {
  Container,
  SliderContainer
};