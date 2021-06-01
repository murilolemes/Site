import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content } from './styles';

function Home() {
  return (
    <Container>
      <Content>
        <Link to="/calculator">Calculadora</Link>
      </Content>
    </Container>
  );
}

export default Home;
