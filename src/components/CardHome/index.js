import React from 'react';

import { CgCalculator } from 'react-icons/cg';

import { Container, Content } from './styles';

const CardHome = () => (
  <Container>
    <Content>
      <div id="icon">
        <CgCalculator size={50} />
      </div>
      <div id="description">
        <h3>Calculadora</h3>
        <p>Calculadora de uso diário</p>
      </div>
    </Content>
  </Container>
);

export default CardHome;
