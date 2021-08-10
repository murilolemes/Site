import styled from 'styled-components';
import { shade } from 'polished';
// ${shade(0.6, '#5a6794')};
export const Container = styled.div`
  width: 700px;
  padding: 10px 0;
  position: absolute;
  top: 0;
  left: 450px;
`;

export const Content = styled.div``;

export const CardsStorys = styled.div`
  width: 100%;
  height: 190px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  .story {
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: 15px;

    & + .story {
      margin-left: 04px;
    }

    img {
      width: 100%;
      height: 100%;
      border-radius: 16px;
    }

    #descriptionMyStory {
      width: 100%;
      height: 50px;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      background: ${shade(0.6, '#5a6794')};
      border-radius: 0 0 15px 15px;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;

      #iconAdd {
        width: 30px;
        height: 30px;
        border: 2px solid ${shade(0.6, '#5a6794')};
        border-radius: 50%;
        background: var(--color-blue-facebook);
        margin-top: -28px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    .descriptionStory {
      width: 100%;
      height: 50px;
      padding: 0 6px;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;

      p {
        text-align: center;
      }
    }
  }
`;
