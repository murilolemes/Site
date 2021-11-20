import React from 'react';
import { Link } from 'react-router-dom';

import LogoMLDWEscuroSF from '../../assets/Logo_MLDW_Branco.png';

import { Container, Content, Title, NavBar } from './styles';

const Header = () => (
  <Container>
    <Content>
      <Title>
        <Link to="/">
          <img src={LogoMLDWEscuroSF} alt="Logo Murilo" />
        </Link>
      </Title>
      <NavBar>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/calculator">Calculadora</Link>
          </li>

          <li>
            <Link to="/finances">Finanças</Link>
          </li>
        </ul>
      </NavBar>
    </Content>
  </Container>
);

export default Header;
