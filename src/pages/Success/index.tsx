import { Content, DeliveryContainer, DeliveryContainer2, ItemContainer, Main, PinContainer, Title } from "./styles";
import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'
import ilustration from '../../../public/imgs/Illustration.png'
import { useLocation } from 'react-router-dom';
import { useShoppingCart } from "../../hooks/useShoppingCart";



export function Success(){

const { paymentBtnValue } = useShoppingCart()

function getPayment(){
  if(paymentBtnValue === 'cash'){
    return 'Dinheiro'
  } else if(paymentBtnValue === 'credit'){
    return 'Cartão de Crédito'
  } else if(paymentBtnValue === 'debit'){
    return 'Cartão de Débito'
  } else {
    return 'Pagamento nao identificado'
}
}

const location = useLocation();

    return (
        <Main>
            <Title>
                <h1>Uhu! Pedido confirmado </h1>
                <p>Agora é só aguardar que logo o café chegará até você</p>
            </Title>

            <Content>
              <DeliveryContainer>
                <DeliveryContainer2>
                    <ItemContainer>
                      <PinContainer variant="purple">
                          <MapPin size={22} />
                      </PinContainer>
                      <div>
                        <p>Entrega em Rua {location.state.rua}, 102</p> 
                        <p><b>{location.state.bairro} - {location.state.cidade}, {location.state.uf}</b></p>
                      </div>
                    </ItemContainer>

                    <ItemContainer>
                      <PinContainer variant="yellow">
                        <Timer size={22} />
                      </PinContainer>
                      <div>
                        <p>Previsão de entrega</p>
                        <p><b>20 min - 30 min</b></p>
                      </div>
                    </ItemContainer>

                    <ItemContainer>
                      <PinContainer variant="yellowDark">
                        <CurrencyDollar size={22} />
                      </PinContainer>
                      <div>
                        <p>Pagamento na entrega</p>
                        <p><b>{getPayment()}</b></p>
                      </div>
                    </ItemContainer>
                </DeliveryContainer2>
              </DeliveryContainer>

              <img src={ilustration} alt="" />
            </Content>
        </Main>
    )
}