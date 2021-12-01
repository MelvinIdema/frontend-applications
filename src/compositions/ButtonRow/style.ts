import styled from "styled-components"
import Button from "../../components/Button"

export const StyledButtonRow = styled.section`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  overflow-x: scroll;
  padding: 0 12px;
  
  &::-webkit-scrollbar {
    display: none; 
  }
`

export const StyledButton = styled(Button)`
  min-width: 130px;
  margin-right: 32px;
  
  &:last-of-type {
    margin-right: 0;
  }
`
