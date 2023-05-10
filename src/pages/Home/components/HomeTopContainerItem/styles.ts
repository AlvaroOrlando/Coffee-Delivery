import styled, { css } from "styled-components"

export const LeftContainerBottomItem = styled.div`
  display: flex;
  align-items: center;
  justify-content:space-between;
  gap: 0.7rem;

  & span{
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    color: ${props => props.theme['--base-text']};
    line-height: ${props => props.theme['--130']};
  }
`

interface ItemContainerProps {
  variant?: 'yellowDark' | 'yellow' | 'baseText' |'purple';
}

export const IconContainer = styled.div<ItemContainerProps>`
  display: flex;
  align-items: center;
  justify-content:center;
  line-height: 0;
  color:${props => props.theme['--white']};
  padding:0.5rem;
  border-radius:1000px;
  
 
  ${props => props.variant === 'yellowDark' && css `
    background-color: ${props.theme['--yellow-dark']}
  `}

  ${props => props.variant === 'yellow' && css `
    background-color: ${props.theme['--yellow']}
  `}

  ${props => props.variant === 'baseText' && css `
    background-color: ${props.theme['--base-text']}
  `}

  ${props => props.variant === 'purple' && css `
    background-color: ${props.theme['--purple']}
  `}
`



