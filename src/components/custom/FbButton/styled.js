import styled from 'styled-components';

export const Button = styled.button`
  height: 50px;
  font-size: 1.2rem;
  border: none;
  border-radius: 8px;
  background: ${(props) => (props.primary ? '#42b983' : '#ccc')};
  color: ${(props) => (props.primary ? 'white' : 'black')};
  cursor: pointer;
  width: ${(props) => (props.width ? props.width : 'auto')}; ;
`;
