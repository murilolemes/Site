import React from 'react';

import { Link } from 'react-router-dom';

import { Container, Content, Title, NavBar } from './styles';

const Header = () => (
  <Container>
    <Content>
      <Title>
        <h1>Murilo Lemes</h1>
      </Title>
      <NavBar>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/calculator">Calculadora</Link>
          </li>
        </ul>
      </NavBar>
    </Content>
  </Container>
);

export default Header;
