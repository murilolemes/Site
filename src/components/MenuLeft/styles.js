import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  flex: 1;
  position: absolute;
`;

export const Content = styled.div`
  width: 310px;
  height: 80%;
  padding: 0 5px;
  position: fixed;
  overflow-y: auto;
  scrollbar-width: 1px;
  ::-webkit-scrollbar-track {
    background-color: ${shade(0.6, '#5a6794')};
  }
  ::-webkit-scrollbar {
    width: 6px;
    background: ${shade(0.6, '#5a6794')};
  }
  ::-webkit-scrollbar-thumb {
    background: ${shade(0.5, '#5a6794')};
  }

  #menuLeftLinks {
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
  }

  #span {
    width: 100%;
    border: 1px solid ${shade(0.6, '#5a6794')};
    margin-top: 10px;
  }

  #shortcuts {
    width: 100%;
    padding: 10px 0;

    p {
      margin-left: 5px;
      margin-bottom: 10px;
    }

    .linkShortcuts {
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

      #iconShortcuts {
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid var(--color-primary-light);
        border-radius: 3px;
      }

      p {
        font-size: 1.4rem;
        margin-left: 10px;
        margin-bottom: 0;
      }
    }
  }
`;
