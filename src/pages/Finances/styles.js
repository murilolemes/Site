import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 700px;
  padding: 50px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CardContainer = styled.section`
  width: 100%;
  height: 110px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
`;

export const Card = styled.div`
  height: 100%;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--color-secondary);

  header {
    width: 100%;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 1.7rem;
    }

    img {
      width: 26px;
      height: 26px;
    }
  }
  h1 {
    margin-top: 14px;
    font-size: 3rem;
    font-weight: normal;
    line-height: 54px;
  }

  .income {
    color: #12a454;
  }
  .outcome {
    color: #e83f5b;
  }
  .total {
    color: var(--color-primary-light);
  }
`;

export const InputContainer = styled.section`
  width: 100%;
  padding: 30px 0;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    width: 100%;
    text-align: center;
    font-size: 2rem;
    margin-bottom: 10px;
  }
`;

export const DivForm = styled.div`
  width: 100%;

  form {
    width: 100%;

    div {
      & + div {
        margin-top: 10px;
      }
    }

    #divRadioAndButton {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .inputsRadio {
        display: flex;
        align-items: center;
        justify-content: flex-start;

        label {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8rem;

          & + label {
            margin-left: 20px;
          }

          input {
            width: 16px;
            height: 16px;
            margin-right: 6px;
          }

          img {
            width: 18px;
            height: 18px;
            margin-left: 5px;
          }
        }
      }
    }
  }
`;

export const ButtonAddFinance = styled.button`
  width: 150px;
  height: 40px;
  background: var(--color-secondary);
  border: none;
  border-radius: 6px;
  color: var(--color-primary-light);
  font-size: 1.8rem;
  transition: 0.2s;

  &:hover {
    background: var(--color-secondary-light);
  }
`;

export const TableContainer = styled.section`
  width: 100%;
  height: 500px;
  padding: 10px 0px;

  table {
    width: 100%;
    border-spacing: 0 8px;

    th {
      color: var(--color-secondary-light);
      font-weight: normal;
      padding: 20px 5px;
      text-align: left;
      font-size: 1.6rem;
      line-height: 24px;
    }

    td {
      padding: 20px 5px;
      border: 0;
      background: var(--color-primary-light);
      font-size: 1.6rem;
      font-weight: normal;
      color: var(--color-secondary-light);

      &.title {
        color: var(--color-secondary);
      }

      &.income {
        color: #12a454;
      }

      &.outcome {
        color: #e83f5b;
      }
    }

    .trash {
      display: flex;
      align-items: center;
      justify-content: center;

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        background-color: var(--color-primary-light);
        color: var(--color-secondary-light);

        &:hover {
          color: #e83f5b;
        }
      }
    }

    td:first-child {
      border-radius: 8px 0 0 8px;
    }

    td:last-child {
      border-radius: 0 8px 8px 0;
    }
  }
`;

export const DivPages = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 1rem;

  p {
    margin: 0 1rem;
  }

  button {
    height: 40px;
    width: 40px;
    background-color: transparent;
    border-radius: 50%;
    border: 0px;
    color: var(--color-primary-light);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s;

    & + button {
      margin-left: 1rem;
    }

    svg {
      width: 25px;
      height: 25px;
    }

    :disabled {
      opacity: 0.2;
    }

    :hover {
      background: var(--color-secondary);
    }
  }
`;
