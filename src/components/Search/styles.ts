import styled from 'styled-components'


export const SearchButton = styled.button `
  border: 0;
  background: transparent;
  color: var(--primary);
  padding: 1vw;
  margin: 1vh 3vw 0 0;
`

export const SearchDrawer = styled.section`
  display: block;
  width: 100%;
  height: 100%;
  background: #000;
  position: fixed;
  top: 0;
  left: 0;
  font-size: 14px;

  aside {
    margin: 0 6vw;
    display: flex;
    justify-content: space-between;

    h3 {
      color: var(--primary);
      margin: 2vh 0;
      flex: 1;
    }
    button {
      width: 48px;
      z-index: 11;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 0;
      background-color: transparent;
    }
  }
`

export const SearchHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 65px;
  text-transform: uppercase;
  background: rgb(10, 10, 10);

  h3 {
    margin: 0px auto;
  }
  input {
    padding-left: 15px;
    width: 80%;
    height: 45px;
    color: #FFF;
    border: 1px solid rgb(39, 39, 39);
    background: #131313;
  }

  input + button {
    width: 50px;
    height: 45px;
    color: #FFF;
    background: #131313;
  }

`

export const SearchBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  overflow-x: hidden;
  height: 80vh;

  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10px 0;

    li {
      width: 100%;
    }
  }
`
