/* || Cart Icon */
import styled from 'styled-components'

export const CartIcon = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
  position: relative;
  border: 0;
  background: transparent;
  cursor: pointer;

  sup {
    top: 0;
    height: 1.2rem;
    border-radius: 50%;
    width: 1.2rem;
    background-color: var(--secondary);
    color: var(--white);
    text-align: center;
    padding: 0;
    line-height: 1rem;
    font-weight: 700;
    white-space: nowrap;
    z-index: 9;
    position: absolute;
    left: -10px;
  }
`
/* Card */
export const Card = styled.div `
  display: block;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  font-size: 14px;
  background: #000;

  @media screen and (min-width: 600px) {
    max-width: 400px;
  }
`;

export const CartHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 65px;
  text-transform: uppercase;
  background: rgb(10, 10, 10);


  button {
    border: 0;
    background: transparent;
    position: absolute;
    left: 0;
    margin: 2vw;
  }
  h3 {
    margin: 0px auto;
  }
`;


export const CartContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  overflow-x: hidden;
  height: calc(100vh - 180px);
`

export const CartProducts = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`

export const CartInfo = styled.div`
  position: absolute;
  width: 99%;
  padding: 20px;
  background: rgb(10, 10, 10);
  z-index: 25;
  bottom: 0;
  border-radius: 2px;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 2px;
    font-weight: 400;
    color: #c8c8c8;

    strong {
      color: #FFF;
    }
  }
`
