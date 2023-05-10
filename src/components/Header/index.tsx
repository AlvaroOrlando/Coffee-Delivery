import { 
    CartContainer, 
    HeaderContainer, 
    HeaderLocationContainer, 
    HeaderMenuContainer, 
    LocationContainer, 
    LogoContainer,
    Circle
} from "./styles";

import   logo from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

import { useShoppingCart } from '../../hooks/useShoppingCart'





export function Header(){

    const { getAllItemsQuantity } = useShoppingCart()

    return (
        // Header
        <HeaderContainer>
            {/* Logo */}
           <LogoContainer>
              <img src={logo} alt="" />
           </LogoContainer>

           {/* Location/Cart */}
           <HeaderMenuContainer>
               <HeaderLocationContainer>
                  <LocationContainer>
                     <MapPin color="#4B2995" size={22}/>
                  </LocationContainer>
                  <div>Porto Alegre, RS</div>
               </HeaderLocationContainer>

               <CartContainer href="/checkout">
                  <Circle>
                    {getAllItemsQuantity()}
                  </Circle>
                  <ShoppingCart color="#C47F17"/>
               </CartContainer>
           </HeaderMenuContainer>

        </HeaderContainer>
    )
}

