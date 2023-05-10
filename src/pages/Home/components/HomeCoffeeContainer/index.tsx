import { useShoppingCart } from "../../../../hooks/useShoppingCart";

import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";

import { 
    Card, 
    CardFooter, 
    CardFooterLeft, 
    CardFooterRight, 
    CoffeeShopppingCart, 
    Counter, 
    TitleContainer ,
    CoffeeContainer
} from "./styles";


import homeItems from "../../../../data/items.json"
import { formatCurrency } from "../../../../utilities/formatCurrency";

export function HomeCoffeeContainer(){

    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity} = useShoppingCart()


  return (
        
    <CoffeeContainer>
      {
        homeItems.map(item =>{
          return (
            <Card
              key={item.id}
            >
                
              {/* Image */}
              <div>
                <img src={item.src} alt="" />
              </div>

            {/* Title */}
            <TitleContainer>
              <p>{item.title}</p>
              <p style={item.title2 ? {display:'block'} : {display:'none'}}>{item.title2}</p>
              <p style={item.title3 ? {display:'block'} : {display:'none'}}>{item.title3}</p>
            </TitleContainer>
            
            <h2>{item.subtitle}</h2>
            <p>{item.description}</p>

            <CardFooter>

                {/* Price */}
                <CardFooterLeft>
                    <span>{formatCurrency(item.price)}</span>
                </CardFooterLeft>
                
                {/* Counter */}
                <CardFooterRight>
                <Counter>
                    <button onClick={() => decreaseCartQuantity(item.id)}>
                        <Minus/>
                    </button>

                    <input
                      readOnly 
                      type="number" 
                      value={getItemQuantity(item.id)}
                      min={0}
                      max={99}
                    />

                    <button onClick={() => increaseCartQuantity(item.id)}>
                    <Plus/>
                    </button>
                </Counter>
                <CoffeeShopppingCart>
                    <ShoppingCartSimple/>
                </CoffeeShopppingCart>
                </CardFooterRight>

            </CardFooter>
            </Card>
          )
        })
      }
    </CoffeeContainer>
  )
}
  