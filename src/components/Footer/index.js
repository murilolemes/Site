import React from 'react';
import { CgCopyright } from 'react-icons/cg';
// import { Link } from 'react-router-dom';

// import LogoMLDWEscuroSF from '../../assets/Logo_MLDW_Branco.png';

import { Container, Content } from './styles';

const Footer = () => (
  <Container>
    <Content>
      <p className="copyright">
        <CgCopyright size={16} />
        Desenvolvido por ML Desenvolvimento Web
      </p>
    </Content>
  </Container>
);

export default Footer;
