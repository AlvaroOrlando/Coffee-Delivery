import { useShoppingCart } from "../../../../hooks/useShoppingCart"
import { CartItem } from "../CartItem"

export function ShoppingCard(){
  const {cartItems } = useShoppingCart()

  return (
    <>
      <div>
        {cartItems.map(item => {
          return(
            <CartItem key={item.id} {...item} />
          )
        })}
      </div>
      </>
  )

}
   
    
      
 