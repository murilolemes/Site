import React from 'react';
import { FiSearch } from 'react-icons/fi';
import {
  FaFacebookF,
  FaPuzzlePiece,
  FaFacebookMessenger,
} from 'react-icons/fa';
import { AiFillHome, AiOutlineShop, AiOutlineUser } from 'react-icons/ai';
import { RiSlideshow3Line, RiArrowDownSFill } from 'react-icons/ri';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { BsGrid3X3GapFill } from 'react-icons/bs';
import { MdNotifications } from 'react-icons/md';

import Header from '../../components/Header';
import MenuLeft from '../../components/MenuLeft';
import Feed from '../../components/Feed';
import Contacts from '../../components/Contacts';

import { Container, Content, Search, Status, Services } from './styles';

const Facebook = () => (
  <Container>
    <Header />
    <Content>
      <div className="header">
        <Search>
          <div id="icon">
            <FaFacebookF size={32} />
          </div>

          <div id="inputSearch">
            <FiSearch size={20} />
            <input type="text" placeholder="Pesquisar no Facebook" />
          </div>
        </Search>

        <Status>
          <div className="linkPages linkSelected">
            <AiFillHome size={22} />
          </div>
          <div className="linkPages">
            <RiSlideshow3Line size={22} />
          </div>
          <div className="linkPages">
            <AiOutlineShop size={22} />
          </div>
          <div className="linkPages">
            <HiOutlineUserGroup size={22} id="group" />
          </div>
          <div className="linkPages">
            <FaPuzzlePiece size={22} />
          </div>
        </Status>

        <Services>
          <div className="divPerfil">
            <div className="avatar">
              <AiOutlineUser size={18} />
            </div>
            <p>Murilo</p>
          </div>
          <div className="linkMenu">
            <BsGrid3X3GapFill size={18} />
          </div>
          <div className="linkMenu">
            <FaFacebookMessenger size={18} />
          </div>
          <div className="linkMenu">
            <MdNotifications size={18} />
          </div>
          <div className="linkMenu">
            <RiArrowDownSFill size={24} />
          </div>
        </Services>
      </div>
      <div className="content">
        <MenuLeft />
        <Feed />
        <Contacts />
      </div>
    </Content>
  </Container>
);

export default Facebook;
