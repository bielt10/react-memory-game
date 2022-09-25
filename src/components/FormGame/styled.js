import styled from 'styled-components';

export const FormContainer = styled.form`
  padding: 30px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 8px;

  @media only screen and (max-width: 767px) {
    padding: 30px 10px;
  }
`;

export const TitleForm = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-top: 0;
`;
