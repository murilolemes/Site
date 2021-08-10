import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  position: relative;
`;

export const Content = styled.div`
  width: 310px;
  height: 100%;
  padding: 5px;
  position: fixed;
  overflow: scroll;

  #divMenuContacts {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 5px;
    margin-bottom: 10px;

    #MenuContactsIcons {
      display: flex;
      align-items: center;
      justify-content: center;

      svg + svg {
        margin-left: 15px;
      }
    }
  }

  .divContact {
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

    .divAvatar {
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
`;
