import { Minus, Plus,Trash } from 'phosphor-react'
import { AddRemoveItems, CardMainContainer, CounterContainer, Divider, ImageContainer, ProductContainer, ProductLeftContainer, RemoveItemContainer } from "./styles";
import { useShoppingCart } from '../../../../hooks/useShoppingCart';
import homeItems from '../../../../data/items.json'
import { formatCurrency } from '../../../../utilities/formatCurrency'

interface CartItemProps {
  id:number
  quantity:number
}

export function CartItem({id, quantity}:CartItemProps){


  const {  decreaseCartQuantity, increaseCartQuantity, removeFromCart } = useShoppingCart()
  const item = homeItems.find(i => i.id === id)
  if(item == null) return null


    return (
      <>
        <ProductContainer>
          <ProductLeftContainer>
            
            <ImageContainer>
              <img src={item.src} alt="" />
            </ImageContainer>
             
              <CardMainContainer>
                <p>{item.subtitle}</p>
                <AddRemoveItems>
                    <CounterContainer>
                        <button  type='button'>
                            <Minus onClick={()=> decreaseCartQuantity(id)} color='#8047F8'/>
                        </button>

                        <span>
                           {quantity}
                        </span>
                        
                        <button onClick={()=> increaseCartQuantity(id)} type='button'>
                            <Plus color='#8047F8'/>
                        </button>
                    </CounterContainer>
                    {/* Remove Item */}
                      <RemoveItemContainer>
                        <button onClick={()=>removeFromCart(id)} type='button'>
                            <Trash size={16} color='#8047F8' />
                            <p>REMOVER</p>
                        </button>
                      </RemoveItemContainer>
                </AddRemoveItems>
              </CardMainContainer>
            
          </ProductLeftContainer>
          <p>{formatCurrency(item.price * quantity)}</p>
        </ProductContainer>
        <Divider />
      </>
    )
 }
 