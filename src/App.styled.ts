import styled from 'styled-components';
import Container from "./components/Container";

export const Grid = styled.div`
  box-sizing: border-box;
  height: 100vh;
  width: 100vw;
  padding: 16px;
  display: grid;
  grid-template-rows: 140px auto auto;
  grid-template-areas:
                        "BR BR BR BR BR"
                        "AS M M M M" 
                        "AS M M M M";
  grid-gap: 16px;
`

export const Aside = styled.aside`
  grid-area: AS;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  & section {
    height: 100%;
  }
  
  & section:first-child {
    margin-bottom: 32px;
  }
`

export const Main = styled(Container)`
  grid-area: M;
`

export const BeerThumbnail = styled.img`
  display: block;
  height: 50vh;
  margin: 0 auto;
`
