import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Content = styled.div`
  width: 100%;
  padding: 50px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CardContainer = styled.section`
  width: 700px;
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
    font-size: 3.7rem;
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
  width: 700px;
  padding: 30px 0;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid red;

  h1 {
    width: 100%;
    text-align: center;
    font-size: 2rem;
  }
`;

export const Inputs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 32px;

    .inputText {
      width: 70%;
      margin-right: 5px;
    }

    .inputValue {
      flex: 1;
    }
  }
`;

export const TableContainer = styled.section`
  width: 700px;
  margin-top: 64px;
  table {
    width: 100%;
    border-spacing: 0 8px;
    th {
      color: var(--color-secondary-light);
      font-weight: normal;
      padding: 20px 32px;
      text-align: left;
      font-size: 16px;
      line-height: 24px;
    }
    td {
      padding: 20px 32px;
      border: 0;
      background: var(--color-primary-light);
      font-size: 16px;
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
    td:first-child {
      border-radius: 8px 0 0 8px;
    }
    td:last-child {
      border-radius: 0 8px 8px 0;
    }
  }
`;
