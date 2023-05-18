import styled from "styled-components";

export const Main = styled.main`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 2rem;
`

export const LeftContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap:0.75rem;
    width: 100%;
    max-width: 40rem;
    background-color: ${props => props.theme['--white']};
`

export const BaseContainer = styled.div`
    width: 100%;
    padding: 2.5rem;
    background-color: ${props => props.theme['--base-card']};
    display: flex;
    flex-direction: column;
    gap: 2rem;
    border-radius: 6px;
`

export const Title = styled.div`
    width: 100%;
    height: 2.75rem;

    display:flex;
    gap:0.5rem;

    font-family: 'Roboto', sans-serif;
    font-weight: 400;

    & h1{
      font-size: 1rem;
      line-height: ${props => props.theme['--130']};
      color:  ${props => props.theme['--base-subtitle']};
    }

    & p{
      font-size: 0.875rem;
      line-height: ${props => props.theme['--130']};
      color:  ${props => props.theme['--base-text']};

    }
`

export const PinContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
`

export const TitleContainer = styled.div`
    height: 100%;
`

export const FormContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;


    & input{
        padding:0.75rem;
        border: 1px solid #E6E5E5;
        border-radius: 4px;
        background-color: ${props => props.theme['--base-input']};
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 0.875rem;
        line-height: ${props => props.theme['--130']};
        color:  ${props => props.theme['--base-text']};
        max-height: 2.763rem;
    }

    & input:-webkit-autofill {
        -webkit-text-fill-color:  ${props => props.theme['--base-text']} !important;
        -webkit-box-shadow: 0 0 0px 1000px ${props => props.theme['--base-input']} inset;
    }
    

    & input:focus{
        border: 1px solid ${props => props.theme['--yellow-dark']};
    }

    & input::placeholder{
      font-size: 0.875rem;
      font-weight: 400;
      line-height: ${props => props.theme['--130']};
      font-family: 'Roboto', sans-serif;
      color: ${props => props.theme['--base-label']};
    }

    & :first-child input{
        max-width: 12.5rem;
    }

    & :nth-child(1){
        width: 100%;
    }


        /* & div{
            position: absolute;
            right: 0.75rem;
            height: 100%;
            display: flex;
            align-items: center;

            font-family: 'Roboto', sans-serif;
            font-size: 0.75rem;
            font-style: italic;
            font-weight: 400;
            line-height: 1rem;
            color: ${props => props.theme['--base-text']};
        } */

    & :nth-child(4){
        display: flex;
        gap:0.75rem;

        & :first-child{
            max-width: 12.5rem;
        }

        & :nth-child(2){
            max-width:17.25rem;
        }

        & :nth-child(3){
            max-width:4.75rem;
        }
        
    }

`

export const PaymentContainer = styled.div`
    width: 100%;
    display: flex;
    gap: 0.75rem;

    & button:focus{
        background-color: ${props => props.theme['--purple-light']};
        border: 1px solid ${props => props.theme['--purple']};
        pointer-events: none;
    }
`

export const PaymentButton = styled.button.attrs({ type: 'button' })`
    width: 100%;
    max-width: 11.167rem;
    height:3.188rem;
    border-radius:6px;

    font-size:0.75rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    line-height: ${props => props.theme['--160']};

    color: ${props => props.theme['--base-text']};
    background-color: ${props => props.theme['--base-button']};

    transition: ease 0.3s;


    & :hover{
        cursor: pointer;

        background-color: ${props => props.theme['--base-hover']};
        transition: ease 0.3s;
    }

    & :focus{
        background-color: ${props => props.theme['--purple-light']};
        border: ${props => props.theme['--purple']};
    }
    
`

export const PaymentButtonContainer = styled.div`
    width: 100%;
    padding:1rem;
    
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.75rem;

    border-radius:6px;

    
`

export const RightContainer = styled.div`
    width: 100%;
    height: fit-content;
    max-width: 28rem;
    background-color: ${props => props.theme['--base-card']};
    padding: 2.5rem;

    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    border-radius: 6px;
`

export const CheckoutSummary = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   gap: 0.75rem;

   & :nth-child(1){
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 0.875rem;
        line-height: ${props => props.theme['--130']};
        color: ${props => props.theme['--base-text']};

        display: flex;
        align-items: center;
        justify-content: space-between;
   }

   & :nth-child(2){
        color: ${props => props.theme['--base-text']};

        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 0.875rem;
        line-height: ${props => props.theme['--base-text']};

        display: flex;
        align-items: center;
        justify-content: space-between;
   }

   & :nth-child(3){
        display: flex;
        align-items: center;
        justify-content: space-between;

        & p{
            font-family: 'Roboto', sans-serif;
            font-weight: 700;
            font-size: 1.25rem;

            color: ${props => props.theme['--base-subtitle']};
        }
        
        
   }
`

export const ConfirmButtonContainer = styled.div`
    width: 100%;
    max-width: 23rem;
    border-radius: 6px;

    & button{
        width: 100%;
        height: 2.875rem;
        display: flex;
        justify-content: center;
        align-items: center;

        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        font-size: 0.875rem;
        line-height: ${props => props.theme['--160']};
        font-stretch: 100;

        color: ${props => props.theme['--white']};
        background-color:  ${props => props.theme['--yellow']};

        border-radius: 6px;
        transition: ease 0.3s;


        &:hover{
            cursor: pointer;
            background-color:  ${props => props.theme['--yellow-dark']};
            transition: ease 0.3s;
        }

    }

`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0px;

    & small {
        color:red;
        padding: 0.2rem;
    }

    & #cidade{
        width: 100%;
    }
`

export const InputGroup = styled.div`
    display: flex;
    gap: 0.75rem;

   & #uf{
    width: 100%;
    max-width: 3.75rem;
   }

   
`

export const NumberContainer = styled.div`
    display:flex;
    gap:0.75rem;

    & :first-child{
        width: 100%;
        max-width: 12.5rem;
    }

    & :last-child{
       width: 100%;
    }

`
    