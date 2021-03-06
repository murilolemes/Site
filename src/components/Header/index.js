import React from 'react';
import { Link } from 'react-router-dom';

import Logo1 from '../../assets/Logo1.png';

import { Container, Content, Title, NavBar } from './styles';

const Header = () => {
  const routePathName = window.location.pathname;

  const activeHome = routePathName === '/' ? 'active' : '';
  const activeCalc = routePathName === '/calculator' ? 'active' : '';
  const activeFin = routePathName === '/finances' ? 'active' : '';

  return (
    <Container>
      <Content>
        <Title>
          <Link to="/">
            <img src={Logo1} alt="Logo Murilo" />
          </Link>
        </Title>
        <NavBar>
          <ul>
            <li>
              <Link to="/" className={activeHome}>
                Home
              </Link>
            </li>

            <li>
              <Link to="/calculator" className={activeCalc}>
                Calculadora
              </Link>
            </li>

            <li>
              <Link to="/finances" className={activeFin}>
                Finanças
              </Link>
            </li>
          </ul>
        </NavBar>
      </Content>
    </Container>
  );
};
export default Header;
