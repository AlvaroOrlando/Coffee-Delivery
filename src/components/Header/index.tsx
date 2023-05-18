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
import { Link } from "react-router-dom";





export function Header(){

    const { getAllItemsQuantity, cartItems } = useShoppingCart()
    return (
        // Header
        <HeaderContainer>
            {/* Logo */}
           <LogoContainer>
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
           </LogoContainer>

           {/* Location/Cart */}
           <HeaderMenuContainer>
               <HeaderLocationContainer>
                  <LocationContainer>
                     <MapPin color="#4B2995" size={22}/>
                  </LocationContainer>
                  <div>Porto Alegre, RS</div>
               </HeaderLocationContainer>

               <Link to='checkout' state={cartItems}>
                 <CartContainer>
                    <Circle>
                        {getAllItemsQuantity()}
                    </Circle>
                        <ShoppingCart color="#C47F17"/>
                  </CartContainer>
                </Link>
           </HeaderMenuContainer>

        </HeaderContainer>
    )
}

