import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 150px;
  padding: 10px;
  background: linear-gradient(
    0,
    var(--color-secondary),
    var(--color-background)
  );
  /* border-top: 1px solid var(--color-secondary);
  box-shadow: 0px 0px 10px 0px var(--color-secondary-light); */
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .copyright {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
  }

  @media (max-width: 599px) {
    flex-direction: column;
    justify-content: center;
  }
`;
