import React from 'react';
import { FiPlus } from 'react-icons/fi';

import { Container, Content, CardsStorys } from './styles';

const Feed = () => (
  <Container>
    <Content>
      <CardsStorys>
        <div className="story">
          <img
            src="https://avatars.githubusercontent.com/u/49878902?v=4"
            alt="Murilo"
          />
          <div id="descriptionMyStory">
            <div id="iconAdd">
              <FiPlus size="22" />
            </div>
            <p>Criar Story</p>
          </div>
        </div>
        <div className="story">
          <img
            src="https://avatars.githubusercontent.com/u/49878902?v=4"
            alt="Murilo"
          />
          <div className="descriptionStory">
            <p>Fulano de Tal Nome</p>
          </div>
        </div>
        <div className="story">
          <img
            src="https://avatars.githubusercontent.com/u/49878902?v=4"
            alt="Murilo"
          />
          <div className="descriptionStory">
            <p>Fulano de Tal</p>
          </div>
        </div>
        <div className="story">
          <img
            src="https://avatars.githubusercontent.com/u/49878902?v=4"
            alt="Murilo"
          />
          <div className="descriptionStory">
            <p>Fulano de Tal</p>
          </div>
        </div>
        <div className="story">
          <img
            src="https://avatars.githubusercontent.com/u/49878902?v=4"
            alt="Murilo"
          />
          <div className="descriptionStory">
            <p>Fulano de Tal</p>
          </div>
        </div>
        <div className="story">
          <img
            src="https://avatars.githubusercontent.com/u/49878902?v=4"
            alt="Murilo"
          />
          <div className="descriptionStory">
            <p>Fulano de Tal</p>
          </div>
        </div>
      </CardsStorys>
    </Content>
  </Container>
);

export default Feed;
