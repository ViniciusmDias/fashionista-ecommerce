import styled from 'styled-components'

export const List = styled.section`
  margin: 10px;
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 5px;

  h2 {
    font-weight: 400;
    font-size: calc(15px + 0.5vw);
    margin-right: 5px;
  }

  label {
    font-weight: 400;
    color: #e6e6e6;
  }

}

  ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    @media (min-width: 760px) {
      justify-content: space-between;

      &::after {
        content: "";
        flex: auto;
      }
    }
    a {
      margin: 2vh 0;
      display: flex;
      justify-content: center;
      width: 100%;
      text-decoration: none;
      color: var(--primary);

      @media (min-width: 760px) {
        width: 22%;
      }
    }




  }

`
