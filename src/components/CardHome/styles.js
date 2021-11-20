import styled from 'styled-components';

export const Container = styled.div`
  width: 220px;
  height: 300px;
  background: var(--color-secondary);
  padding: 30px;
  /* border: 1px solid var(--color-primary); */
  border-radius: 10px;
  box-shadow: 0 0 5px 5px var(--color-primary);

  & + div {
    margin-left: 50px;
  }

  @media (max-width: 599px) {
    width: 100%;
    height: 400px;
    padding-top: 60px;

    & + div {
      margin-left: 0;
      margin-top: 50px;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;

  #icon {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--color-background);
  }

  #description {
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
      font-size: 2rem;
      color: var(--color-background);
      font-weight: 500;
      margin-top: 40px;
    }

    p {
      font-size: 1.4rem;
      margin-top: 34px;
      color: var(--color-primary);
    }
  }

  @media (max-width: 599px) {
    width: 100%;
  }
`;
