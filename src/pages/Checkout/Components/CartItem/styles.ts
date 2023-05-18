import styled from "styled-components"

export const ProductContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0.25rem;

    & p{
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        font-size: 1rem;
        line-height: ${props => props.theme['--130']};
        color: ${props => props.theme['--base-text']};
    }

`

export const ProductLeftContainer = styled.div`
    display: flex;
    gap: 0.875rem;
    background-color: ${props => props.theme['--base-card']};
`

export const ImageContainer = styled.div`
    width:4rem;
    height: 4rem;

    & img{
      width:100%;
      height:100%;
    }
`

export const CardMainContainer = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;

    & p{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
        line-height: ${props => props.theme['--130']};
        color: ${props => props.theme['--base-subtitle']};
    }
`

export const AddRemoveItems = styled.div`
    width: 100%;
    display: flex;
    gap: 0.5rem;
`

export const CounterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    gap: 0.5rem;

    width: 4.5rem;
    height: 2rem;

    border-radius: 6px;
    background-color: ${props => props.theme['--base-button']};

    & button{
        color: ${props => props.theme['--purple']};
        width: 0.875rem;
        height: 0.875rem;

        & :hover{
            cursor: pointer;
        }
    }

    & span{
        width: 1.25rem;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
        text-align: center;
        color: ${props => props.theme['--base-title']};
        border:none;
        background-color: transparent;
    }
`

export const RemoveItemContainer = styled.div`

    & p{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 0.75rem;
        line-height: 0;
        color: ${props => props.theme['--base-text']};
    }

    & button{
        width: 100%;
        height: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap:0.25rem ;
        padding: 0.5rem;

        border-radius: 6px;
        background-color: ${props => props.theme['--base-button']};
        transition: ease 0.3s;

        &:hover{
          cursor: pointer;
          background-color:${props => props.theme['--base-hover']};
          transition: ease 0.3s;
        }
    }
`
export const Divider = styled.div`
    max-width: 23rem;
    height: 0px;
    border: 1px solid ${props => props.theme['--base-button']};
    margin-bottom:1.5rem;
    margin-top:1.5rem;
`