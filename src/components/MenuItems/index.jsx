import React from 'react';
import { Link } from 'react-scroll';

import { MenuList, MeunListItem } from './styles';

const MenuItems = () => {
  return (
    <MenuList>
      <MeunListItem>
        <Link to="home" smooth duration={500}>
          Home
        </Link>
      </MeunListItem>
      <MeunListItem>
        <Link to="about" smooth duration={500}>
          About
        </Link>
      </MeunListItem>
      <MeunListItem>
        <Link to="services" smooth duration={500}>
          Services
        </Link>
      </MeunListItem>
      <MeunListItem>
        <Link to="technologies" smooth duration={500}>
          Technologies
        </Link>
      </MeunListItem>
      <MeunListItem>
        <Link to="clients" smooth duration={500}>
          Clients
        </Link>
      </MeunListItem>
      <MeunListItem>
        <Link to="team" smooth duration={500}>
          Team
        </Link>
      </MeunListItem>
      <MeunListItem>
        <Link to="contact" smooth duration={500}>
          Contact
        </Link>
      </MeunListItem>
    </MenuList>
  );
};

export default MenuItems;
