import React from 'react';

import Header from '../../components/Header';
import CardHome from '../../components/CardHome';

import { Container, Content } from './styles';

const Home = () => (
  <Container>
    <Header />
    <Content>
      <div>
        <CardHome />
        <CardHome />
        <CardHome />
        <CardHome />
      </div>
    </Content>
  </Container>
);

export default Home;
