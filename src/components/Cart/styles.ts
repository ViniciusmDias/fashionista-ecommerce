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
    z-index: 10;
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
  }
  h3 {
    margin: 0px auto;
  }
`;

// .cart__content {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   overflow-y: auto;
//   overflow-x: hidden;
//   height: calc(100vh - 180px);
// }

// .cart__products {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   margin: 0 5px;
// }

// /* || CartItem */

// .cart-item {
//   position: relative;
//   display: flex;
//   align-items: center;
//   width: 100%;
//   margin-bottom: 5px;
//   padding: 5px;
//   border-radius: 2px;
//   background: #131313;
// }

// .cart-item__image {
//   max-width: 100px;
// }

// .cart-item__infos {
//   display: flex;
//   flex-direction: column;
//   margin-left: 15px;
//   min-width: 200px;
// }

// .cart-item__text {
//   font-size: 12px;
//   margin-bottom: 2px;
//   color: #FFF;
//   text-transform: capitalize;
// }

// .cart-item__quantity {
//   display: flex;
//   text-align: center;
//   align-items: center;
//   margin-top: 8px;
// }

// .cart-item__btn-increment, .cart-item__btn-decrement {
//   text-align: center;
//   width: 20px;
//   height: 20px;
//   font-size: 14px;
//   padding: 0;
//   background-color: transparent;
//   color: #000;
//   background: #fff;
//   border: 1px solid #FFF;
//   border-radius: 100%;
//   margin: 0px 10px;
// }

// .cart-item__btn-remove {
//   padding: 0;
//   background: transparent;
// }

// .cart__infos {
//   position: absolute;
//   width: 99%;
//   padding: 20px;
//   background: rgb(10, 10, 10);
//   z-index: 25;
//   bottom: 0;
//   border-radius: 2px;
// }

// .info__content {
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   margin-bottom: 2px;
//   font-weight: 400;
//   color: #c8c8c8;
// }

// .info__text--color {
//   color: #FFF;
// }


// @media screen and (min-width: 600px) {
//   .cart {
//     max-width: 400px;
//   }
// }

