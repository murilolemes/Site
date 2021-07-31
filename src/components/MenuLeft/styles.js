import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  flex: 1;
`;

export const Content = styled.div`
  width: 310px;
  height: 100%;

  .divMenuLeft {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-radius: 8px;
    padding: 5px;

    &:hover {
      background: ${shade(0.3, '#5a6794')};
    }

    .icon {
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid var(--color-primary-light);
      border-radius: 50%;
    }

    p {
      font-size: 1.4rem;
      margin-left: 10px;
    }
  }

  #shortcuts {
    width: 100%;
    height: 100%;
    border-top: 1px solid ${shade(0.6, '#5a6794')};
    margin-top: 10px;
    padding: 10px 5px;

    .linkShortcuts {
      width: 100%;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      border-radius: 8px;

      &:hover {
        background: ${shade(0.3, '#5a6794')};
      }

      #iconShortcuts {
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid var(--color-primary-light);
        border-radius: 10px;
      }

      p {
        font-size: 1.4rem;
        margin-left: 10px;
      }
    }
  }
`;
