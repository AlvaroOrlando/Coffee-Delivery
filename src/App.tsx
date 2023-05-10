import { Home } from "./pages/Home";
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";


import { Routes, Route } from 'react-router-dom'
import { ShoppinCartProvider } from "./context/shoppingCartContext";

export function App() {
  return (
    <ThemeProvider theme={ defaultTheme }>
      <ShoppinCartProvider>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<h1>Checkout</h1>} />
          <Route path="/success" element={<h1>Success</h1>} />
        </Routes>
      </ShoppinCartProvider>
    </ThemeProvider>
  )
}

