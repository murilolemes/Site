import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px;
  background: var(--color-secondary-light);
`;

export const Content = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 599px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const Title = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: var(--color-background);

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1,
    p {
      text-shadow: -1px 1px 4px var(--color-primary-light);
    }

    h1 {
      font-size: 4rem;
    }

    p {
      font-size: 1.8rem;
      font-weight: 500;
    }
  }

  @media (max-width: 599px) {
    justify-content: center;
    height: 100%;

    div {
      h1 {
        font-size: 2.4rem;
      }

      p {
        font-size: 1.4rem;
      }
    }
  }
`;

export const NavBar = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  /* padding: 0 10px; */

  ul {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;

    a {
      font-size: 1.8rem;
      font-weight: 500;
      color: var(--color-background);
      text-decoration: none;
      /* border-bottom: 1px solid var(--color-primary); */
      box-shadow: 0 5px 4px -5px var(--color-primary-light);
    }

    li {
      transition: 0.5s;

      &:hover {
        transform: translateY(-5px);
      }
      & + li {
        margin-left: 15px;
      }
    }
  }

  @media (max-width: 599px) {
    justify-content: flex-start;

    ul {
      a {
        font-size: 1.4rem;
      }
    }
  }
`;
