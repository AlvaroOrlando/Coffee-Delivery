import { Cart } from "../Cart";
import {  HeaderLocationContainer, HeaderMenuContainer } from "./styles";
import { Location } from "../Location";


export function HeaderMenu(){
    return (
        <HeaderMenuContainer>
            
               <HeaderLocationContainer>
                   <Location />
                   <div>Porto Alegre, RS</div>
               </HeaderLocationContainer>
           
            <Cart />
        </HeaderMenuContainer>
    )
}