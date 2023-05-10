import {
     LeftContainer,
     LeftContainerBottom,
     LeftContainerBottomLeft, 
     LeftContainerBottomRight, 
     LeftContainerTop, 
     MainContainer, 
     RightContainer 
} from "./styles"

import BigCoffee from '../../../../assets/BigCoffee.svg'
import { HomeTopContainerItem } from "../HomeTopContainerItem"
import { LeftContainerBottomItem } from "../HomeTopContainerItem/styles"
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'


export function HomeTopContainer(){
    return (
        
          <MainContainer>
          {/* Home Top Container Esquerdo */}
            <LeftContainer>
                {/* Top */}
                <LeftContainerTop>
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                </LeftContainerTop>
            
                {/* Bottom */}
                <LeftContainerBottom>
                    {/* Container Esquerdo */}
                    <LeftContainerBottomLeft>
                        {/* Item Superior esquedo */}
                        <LeftContainerBottomItem>
                            <HomeTopContainerItem
                              variant={'yellowDark'}
                              text="Compra simples e segura"
                              icon={
                                <ShoppingCart />
                              }
                            />
                        </LeftContainerBottomItem>
                        {/* Item Inferior Esquerdo */}
                        <LeftContainerBottomItem>
                            <HomeTopContainerItem
                              variant={'yellow'}
                              text="Entrega rápida e rastreada"
                              icon={
                                <Timer />
                              }
                        />
                        </LeftContainerBottomItem>
            
                    </LeftContainerBottomLeft>
                    {/* Container Direito */}
                    <LeftContainerBottomRight>
                        {/* Item Superior direito */}
                        <LeftContainerBottomItem>
                            <HomeTopContainerItem
                              variant={'baseText'}
                              text="Embalagem mantém o café intacto"
                              icon={
                                <Package />
                              }
                            />
                        </LeftContainerBottomItem>
                        {/* Item Inferior direito */}
                        <LeftContainerBottomItem>
                            <HomeTopContainerItem
                              variant={'purple'}
                              text="O café chega fresquinho até você"
                              icon={
                                <Coffee />
                              }
                            />
                        </LeftContainerBottomItem>
                    </LeftContainerBottomRight>
                </LeftContainerBottom>
            
            </LeftContainer>
            <RightContainer>
              <img src={BigCoffee} alt="" />
            </RightContainer>
          </MainContainer>
    )
}