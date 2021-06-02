import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px;
  background: var(--color-secondary-light);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavBar = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;

  ul {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;

    a {
      font-size: 1.8rem;
      font-weight: 500;
      color: var(--color-primary-light);
      text-decoration: none;
      border-bottom: 1px solid var(--color-primary-light);
      box-shadow: 0 4px 5px -5px var(--color-primary-light);
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
`;
