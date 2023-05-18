import styled, { css } from "styled-components";

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
`

export const Title = styled.section`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    & h1{
        font-family: 'Baloo 2',sans-serif;
        font-weight: 800;
        font-size: 2rem;
        line-height: ${props => props.theme['--130']};
        color: ${props => props.theme['--yellow-dark']};
    }

    & p {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1.25rem;
        line-height: ${props => props.theme['--130']};
        color: ${props => props.theme['--base-subtitle']};
    }
`

export const Content = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const DeliveryContainer = styled.div`
    width: 32.875rem;
    border: 1px solid transparent;
    border-radius:6px 36px;
    background-image:
    linear-gradient(white, white),
    linear-gradient(to right, #DBAC2C, #8047F8);
    background-origin: border-box;
    background-clip: content-box, border-box;
`

export const DeliveryContainer2 = styled.div`
    display: flex;
    flex-direction: column;
    gap:2rem;
    padding: 2.5rem;
`

export const ItemContainer = styled.div`
    display: flex;
    gap: 0.75rem;

    & p {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
        color: ${props => props.theme['--base-text']};
    }
`

interface PinContainerProps {
    variant?: 'yellowDark' | 'yellow' | 'purple';
}

export const PinContainer = styled.div<PinContainerProps>`
    background-color:${props => props.theme['--purple']};
    border-radius: 1000px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px;

    color: white;


    ${props => props.variant === 'yellowDark' && css `
    background-color: ${props.theme['--yellow-dark']};
  `}

  ${props => props.variant === 'yellow' && css `
    background-color: ${props.theme['--yellow']}
  `}

  ${props => props.variant === 'purple' && css `
    background-color: ${props.theme['--purple']}
  `}
`
