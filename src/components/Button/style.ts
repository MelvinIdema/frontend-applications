import styled, { css } from 'styled-components'
import type { ButtonVariants } from "./index";

export const StyledButton = styled.button<{
    variant: ButtonVariants,
    image: string,
    selected: boolean,
    [key: string]: any
}>(({ variant, image, selected }) => css`

  font-weight: 600;
  
  ${variant === 'thumbnail' &&
    css`
      box-sizing: border-box;
      display: block;
      width: fit-content;
      padding: 14px 36px 12px 36px;
      text-align: center;
      background: #ffffff;
      border: 0 solid rgba(72, 149, 239, .25);
      border-radius: 6px;
      box-shadow: 0 3px 15px rgba(72, 149, 239, 0.2);
      
      ${image && css`
        width: 130px;
        aspect-ratio: 1/1;
        padding: 21px 32px;
      `}
      
      transition: all 150ms ease-in-out;

      &:active {
        border: 1px solid rgba(72, 149, 239, .3);
        box-shadow: 0 1.5px 7.5px rgba(72, 149, 239, 0.2);
      }

      &:hover {
        cursor: pointer;
        box-shadow: 0 1.5px 7.5px rgba(72, 149, 239, 0.2);
      }

      ${selected && css`
        border: 1px solid rgba(72, 149, 239, .3);
        box-shadow: 0 1.5px 7.5px rgba(72, 149, 239, 0.2);
      `}
      
      label {
        width: 100%;
        display: inline-block;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        cursor: pointer;
      }

      img {
        display: block;
        height: 60px;
        margin: 0 auto 12px;
      }
    `
    
  }
`)
