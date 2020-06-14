import styled from 'styled-components'

export const Item = styled.li`
  max-width: 320px;
  margin-bottom: 20px;
  cursor: pointer;

  div {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const Image = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: auto;
    transition: all .6s ease-in-out;
  }

  div {
    padding: 2px 6px;
    color: #000;
    background: var(--primary);
    position: absolute;
    left: 0;
    top: 0;
  }

  button {
    opacity: 0;
    transition: 0.6s all ease-in-out;
    position: absolute;
    padding: 15px 40px;
    background: transparent;
    color: #fff;
    border: 1px solid rgb(255, 255, 255);
  }

  &:hover {
    img {
      opacity: 0.7;
    }
    button {
      opacity: 1;
    }
  }
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-size: 16px;
    font-weight: 400;
    margin: 5px 0;
  }

  label {
    font-size: 14px;
    text-decoration: line-through;
    color: var(--primary);
  }
  strong {
    font-size: 15px;
    font-weight: 400;
  }
`
