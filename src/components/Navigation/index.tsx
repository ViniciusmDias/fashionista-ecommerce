import React from 'react';

import Cart from '../Cart';
import Search from '../Search'

import { Container, MenuLink } from './styles'


const Navigation: React.FC = () => {

  return (
    <Container>
      <MenuLink to='/'>
        fashionista
      </MenuLink>
      <Search />
      <Cart />
    </Container>
  );
}
export default Navigation
