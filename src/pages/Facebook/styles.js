import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;

  .header {
    width: 100%;
    height: 56px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${shade(0.6, '#5a6794')};
  }

  .content {
    width: 100%;
    height: 100%;
    display: flex;
    padding: 20px 5px;
  }
`;

export const Search = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  #icon {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    border-radius: 50%;
    background: var(--color-blue-facebook);

    svg {
      color: var(--color-primary-light);
    }
  }

  #inputSearch {
    width: 250px;
    height: 40px;
    margin-left: 10px;
    padding: 5px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: ${shade(0.3, '#5a6794')};
    border-radius: 20px;

    svg {
      color: var(--color-primary-light);
    }

    input {
      width: 100%;
      height: 100%;
      margin-left: 8px;
      background: none;
      border: none;
      color: var(--color-primary-light);
    }
  }
`;

export const Status = styled.div`
  width: 650px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .linkPages {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: ${shade(0.3, '#5a6794')};
      border-bottom: 2px solid var(--color-blue-facebook);

      svg {
        color: var(--color-blue-facebook);
      }

      #group {
        border: 1px solid var(--color-blue-facebook);
      }
    }

    svg {
      color: var(--color-primary-light);
    }

    #group {
      border: 1px solid var(--color-primary-light);
      border-radius: 50%;
    }
  }

  .linkSelected {
    border-bottom: 2px solid var(--color-blue-facebook);

    svg {
      color: var(--color-blue-facebook);
    }
  }
`;

export const Services = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .divPerfil {
    display: flex;
    align-items: center;
    justify-content: center;

    .avatar {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid var(--color-primary-light);
      border-radius: 50%;
    }

    p {
      margin-left: 6px;
      margin-right: 12px;
    }
  }

  .linkMenu {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${shade(0.3, '#5a6794')};
    border-radius: 50%;

    & + div {
      margin-left: 6px;
    }
  }
`;
