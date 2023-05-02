import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus{
        outline:0;
    }

    body{
        -webkit-font-smoothing: antialiased;
        background: ${props => props.theme['--background']};
        width:100%;
        max-width: 1120px;
        margin: 0 auto;
    }

    
    
`