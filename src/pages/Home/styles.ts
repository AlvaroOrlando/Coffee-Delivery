import styled from "styled-components";


export const Main = styled.main`
    width: 100%;
`

export const Title = styled.div`
    margin-top:2.5rem;
    margin-bottom:2.5rem;

    & h1{
        color: ${props => props.theme['--base-subtitle']};
        font-family: 'Baloo 2', cursive;
        font-weight: 800;
        font-size: 2rem;
        line-height: ${props => props.theme['--130']};;
    }
`

