
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";

import { BrowserRouter } from 'react-router-dom'

import { ShoppinCartProvider } from "./context/shoppingCartContext";
import { Router } from './Router';

export function App() {
  return (
    <ThemeProvider theme={ defaultTheme }>
      <GlobalStyle />
      <ShoppinCartProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ShoppinCartProvider>
    </ThemeProvider>
  )
}

