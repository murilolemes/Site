import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.div`
  position: absolute;
  top: 0;
`;

export const Content = styled.div`
  max-width: 350px;
  height: 500px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 7px;
  border: 1px solid #262626;
  box-shadow: 0 0 20px 10px #262626;
`;

export const Log = styled.div`
  width: 100%;
  height: 150px;
  margin-top: -50px;
  background: #f5f8fa;
  border: 1px solid #262626;
  border-radius: 7px;
  box-shadow: 0 0 5px 1px #262626;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    width: 100%;
    height: 20px;
    text-align: center;
    font-size: 1.8rem;
    font-weight: 500;

    & + p {
      margin-top: 5px;
    }
  }

  #result {
    color: #ff5555;
  }
`;

export const Keyboard = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .keyboardButtons {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      width: 46px;
      height: 50px;
      border: 1px solid #262626;
      border-radius: 7px;
      box-shadow: 0 0 5px 1px #262626;
      transition: 0.5s;
      font-size: 2rem;
      font-weight: 700;
      transition: 0.5s;

      &:hover {
        transform: translateY(-5px);
        background: #262626;
        color: #f5f8fa;
      }

      & + button {
        margin-left: 10px;
      }
    }

    & + .keyboardButtons {
      margin-top: 15px;
    }

    #backSpace {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    #equal {
      flex: 1;
    }
  }
`;
