import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';

import { Container, Content } from './styles';

const MenuLeft = () => (
  <Container>
    <Content>
      <div className="divMenuLeft">
        <div className="icon">
          <AiOutlineUser size={18} />
        </div>
        <p>Murilo</p>
      </div>
      <div className="divMenuLeft">
        <div className="icon">
          <AiOutlineUser size={18} />
        </div>
        <p>COVID-19: Central de Informações</p>
      </div>
      <div className="divMenuLeft">
        <div className="icon">
          <AiOutlineUser size={18} />
        </div>
        <p>Amigos</p>
      </div>
      <div className="divMenuLeft">
        <div className="icon">
          <AiOutlineUser size={18} />
        </div>
        <p>Salvos</p>
      </div>
      <div className="divMenuLeft">
        <div className="icon">
          <AiOutlineUser size={18} />
        </div>
        <p>Grupos</p>
      </div>
      <div className="divMenuLeft">
        <div className="icon">
          <AiOutlineUser size={18} />
        </div>
        <p>Marketplace</p>
      </div>
      <div className="divMenuLeft">
        <div className="icon">
          <AiOutlineUser size={18} />
        </div>
        <p>Watch</p>
      </div>
      <div className="divMenuLeft">
        <div className="icon">
          <AiOutlineUser size={18} />
        </div>
        <p>Eventos</p>
      </div>
      <div className="divMenuLeft">
        <div className="icon">
          <AiOutlineUser size={18} />
        </div>
        <p>Lembranças</p>
      </div>
      <div className="divMenuLeft">
        <div className="icon">
          <AiOutlineUser size={18} />
        </div>
        <p>Paginas</p>
      </div>
      <div className="divMenuLeft">
        <div className="icon">
          <AiOutlineUser size={18} />
        </div>
        <p>Ver Mais</p>
      </div>

      <div id="shortcuts">
        <p>Seus atalhos</p>
        <div className="linkShortcuts">
          <div id="iconShortcuts">
            <AiOutlineUser size={18} />
          </div>
          <p>Classificados</p>
        </div>
      </div>
    </Content>
  </Container>
);

export default MenuLeft;
