import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100%;
  height: 100px;
  padding: 10px;
  background: linear-gradient(
    0,
    var(--color-background),
    var(--color-secondary)
  );
  /* position: fixed;
  z-index: 1000; */
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  @media (max-width: 599px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const Title = styled.div`
  width: 150px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: var(--color-background);

  a {
    width: 100%;
    height: 100%;

    img {
      width: 150px;
      height: 80px;
      transition: 0.2s;

      &:hover {
        width: 154px;
        height: 84px;
      }
    }
  }

  @media (max-width: 599px) {
    width: 90px;
    height: 60px;

    a {
      width: 90px;
      height: 60px;

      img {
        width: 90px;
        height: 60px;
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
      font-size: 2rem;
      font-weight: 500;
      color: var(--color-primary-light);
      text-decoration: none;
      /* border-bottom: 1px solid var(--color-primary); */
      /* box-shadow: 0 5px 4px -5px var(--color-primary-light); */
    }

    li {
      a {
        transition: color 0.2s;

        &:hover {
          color: ${shade(0.2, '#e7e9ee')};
          /* transform: translateY(-5px); */
        }
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
