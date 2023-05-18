import styled from "styled-components";

export const CoffeeContainer = styled.section`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    row-gap:2.5rem;
    column-gap:2rem;
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 16rem;
    background-color: ${props => props.theme['--base-card']};
    border-radius: 6px 36px;
    padding: 1.5rem;

    & div img{
        width:120px;
        height: 120px;
        margin-top:-40px;
    }

    & h1{
        background-color: ${props => props.theme['--yellow-light']};
        color: ${props => props.theme['--yellow-dark']};
        border-radius: 100px;
        padding: 0.25rem 0.5rem;
        font-size: 0.625rem;
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        line-height: ${props => props.theme['--130']};
        margin-top: 0.75rem;
    }

    & h2{
        color: ${props => props.theme['--base-subtitle']};
        border-radius: 100px;
        /* padding: 0.25rem 0.5rem; */
        font-size: 1.25rem;
        font-family: 'Baloo 2', cursive;
        font-weight: 400;
        line-height: ${props => props.theme['--130']};
        margin-top: 0.5rem;
        text-align: center;
    }

    & p{
        font-family: 'Roboto',sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 130%;
        text-align: center;

        color: ${props => props.theme['--base-label']};
    }

`

export const TitleContainer = styled.div`

    & p {
        background-color: ${props => props.theme['--yellow-light']};
        color: ${props => props.theme['--yellow-dark']};
        border-radius: 100px;
        padding: 0.25rem 0.5rem;
        font-size: 0.625rem;
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        line-height: ${props => props.theme['--130']};
        margin-top: 0.75rem;
    }

    display:flex; 
    align-items:center; 
    justify-content:center;
    gap:0.3rem;
`

export const CardFooter = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    gap: 1.813rem;
    margin-top:2.063rem;
`

export const CardFooterLeft = styled.div`

    display: flex;
    gap: 0.2rem;
    align-items: center;
    justify-content: center;

    & :first-child{
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 0.875rem;
        line-height: ${props => props.theme['--130']};
        color:${props => props.theme['--base-text']}
    }

    & :last-child{
        font-family: 'Baloo 2', cursive;
        font-style: normal;
        font-weight: 800;
        font-size: 1.5rem;
        line-height: ${props => props.theme['--130']};
        color:${props => props.theme['--base-text']}
    }
`

export const CardFooterRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
`

export const Counter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    gap: 0.5rem;

    width: 4.5rem;
    height: 2.375rem;

    border-radius: 6px;
    background-color: ${props => props.theme['--base-button']};

    & button{
        color: ${props => props.theme['--purple']};
        width: 14px;
        height: 14px;
    }

    & input{
        width: 20px;
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        line-height: ${props => props.theme['--130']};
        text-align: center;
        color: ${props => props.theme['--base-title']};
        border:none;
        outline: 0;
        background-color: transparent;
    }

    & input[type=number]::-webkit-inner-spin-button { 
        -webkit-appearance: none;
    }
    
`

export const CoffeeShopppingCart = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 2.375rem;
    height: 2.375rem;
    border-radius: 6px;
    
    background-color: ${props => props.theme['--purple-dark']};
    color: ${props => props.theme['--white']};

    &:hover{
     background-color:${props => props.theme['--purple']};
    }
    
`

