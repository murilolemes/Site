import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Content = styled.div`
  padding: 50px;

  div {
    display: flex;
    align-items: center;
  }

  @media (max-width: 599px) {
    div {
      flex-direction: column;
      justify-content: center;
    }
  }
`;
