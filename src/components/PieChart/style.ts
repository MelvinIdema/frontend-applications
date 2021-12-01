import styled from 'styled-components'

export const Tooltip = styled.div`
  visibility: hidden;
  position: absolute;
  max-width: 100px;
  padding: 10px 18px;
  background: #ffffff;
  border: 1px solid rgba(72, 149, 239, 0.2);
  box-shadow: 0 3px 15px rgba(72, 149, 239, 0.2);
  border-radius: 6px;
  text-align: center;
  transform: translateY(calc(-50% + 10px));
`
