import styled from "styled-components";

export const HeaderMenuContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-grow: 0;

    height: 38px;
    padding: 0px;
    gap: 12px;

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

    font-family: ${props => props.theme['--roboto']};
    font-weight: 400;
    font-size: 0.875rem;
    line-height:${props => props.theme['--130']};
`

