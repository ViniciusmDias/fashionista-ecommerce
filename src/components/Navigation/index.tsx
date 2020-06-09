import React from 'react';

import Cart from '../Cart';

import { Container, MenuLink } from './styles'


const Navigation: React.FC = () => {

  return (
    <Container>
      <MenuLink to='/'>
        fashionista
      </MenuLink>
      <Cart />
    </Container>
  );
}
export default Navigation
