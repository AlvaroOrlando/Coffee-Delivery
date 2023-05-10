
import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    height: 7.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const LogoContainer = styled.div`
    width: 84.95px;
    height: 40px;
`

export const HeaderLocationContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap:4px;

    background-color: ${props => props.theme['--purple-light']};
    color: ${props => props.theme['--purple-dark'] };

    padding: 8px;
    border-radius: 8px;

    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
    line-height:${props => props.theme['--130']};
`

export const LocationContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const HeaderMenuContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-grow: 0;

    height: 38px;
    padding: 0px;
    gap: 12px;
`

export const CartContainer = styled.a`
    border-radius: 6px;
    padding:8px;
    background-color:${props => props.theme['--yellow-light']};
    line-height: 0px;
    position: relative;
    cursor:pointer;
`

export const Circle = styled.div`
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 1000px;

    position: absolute;
    top: -0.625rem;
    left:1.25rem;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${props => props.theme['--yellow']};
    color: ${props => props.theme['--white']};

    font-family: 'Roboto', sans-serif;
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 0;
`

