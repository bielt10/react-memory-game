import styled from 'styled-components';

export const Input = styled.input`
  height: 50px;
  font-size: 1.2rem;
  width: 100%;
  border-radius: 8px;
  padding-left: 10px;
  border: none;
  margin-bottom: ${(props) => (props.mb ? props.mb : '0')}; ;
`;
