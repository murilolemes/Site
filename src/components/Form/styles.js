import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid var(--color-secondary-light);
  border-radius: 6px;

  input {
    width: 100%;
    height: 100%;
    padding: 10px;
    background: none;
    border: none;
    font-size: 1.6rem;
    color: var(--color-primary-light);

    &::placeholder {
      color: var(--color-secondary);
      font-size: 1.6rem;
    }
  }
`;
