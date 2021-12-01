import styled from "styled-components"
import { IContainerProps } from "./index"

export const StyledContainer = styled.section<IContainerProps>`
  box-sizing: border-box;
  width: ${props => props.fluid ? '100%' : 'fit-content'};
  padding: 24px 36px;
  text-align: center;
  background: #ffffff;
  border: 0 solid rgba(72, 149, 239, .25);
  border-radius: 6px;
  box-shadow: 0 3px 15px rgba(72, 149, 239, 0.2);
`
