import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  left: 50%;
  bottom: 35px;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  width: 200px;
`;

const Button = styled.button`
  font-size: 24px;
  background: transparent;
  border: none;
  color: #e1e1e1;
  cursor: pointer;

  &:hover {
    color: #ffffff;
  }
`;

export const Styled = {
  Container,
  Button
};