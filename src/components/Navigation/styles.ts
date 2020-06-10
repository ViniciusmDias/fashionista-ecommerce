import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 10vh;
  position: relative;
  background-color: var(--white);
  margin: 0 4vw;
`

export const MenuLink = styled(Link)`
  color: var(--primary);
  text-decoration: none;
  font-size: 2rem;
  letter-spacing: 3px;
  font-weight: bold;
  flex: 1;

  @media (min-width: 765px) {
    font-size: 2.5rem;
    letter-spacing: 4px;
  }
`
