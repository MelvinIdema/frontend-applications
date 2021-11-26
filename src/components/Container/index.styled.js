import styled from "styled-components";

export const StyledContainer = styled.div`
  box-sizing: border-box;
  width: ${props => props.fluid ? '100%' : 'fit-content'};
  padding: 24px 36px;
  text-align: center;
  background: #ffffff;
  border: 0 solid rgba(72, 149, 239, .25);
  border-radius: 6px;
  box-shadow: 0 3px 15px rgba(72, 149, 239, 0.2);
  transition: all 150ms ease-in-out;

  ${props => props.selected ? `
          border: 1px solid rgba(72, 149, 239, .3);
          box-shadow: 0 1.5px 7.5px rgba(72, 149, 239, 0.2);
         ` : ''}
  
  ${props => props.clickable || props.selected ? `
      &:hover {
        cursor: pointer;
        box-shadow: 0 1.5px 7.5px rgba(72, 149, 239, 0.2);
      }
  ` : ``}
  
  
`
