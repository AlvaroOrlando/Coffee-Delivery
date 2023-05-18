import { ShoppingCard } from "./Components/CheckoutCard";

import { MapPin, CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react'

import {  FormContainer, InputContainer, InputGroup, LeftContainer, Main, NumberContainer } from "./styles";
import {  
  BaseContainer, 
  CheckoutSummary, 
  ConfirmButtonContainer,  
  PaymentButton, 
  PaymentButtonContainer, 
  PaymentContainer, 
  PinContainer,  
  RightContainer,  
  Title,
  TitleContainer 
} from "./styles";


import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { formatCurrency } from "../../utilities/formatCurrency";
import { useShoppingCart } from "../../hooks/useShoppingCart";

import homeItems from '../../data/items.json'
import { useNavigate } from "react-router-dom";


export function Checkout(){

  
    const {cartItems, delivery, handleBtnValue, resetCart } = useShoppingCart()

    const checkoutFormSchema = zod.object({
      cep: zod.string().nonempty('O CEP é obrigatório'),
      rua: zod.string().nonempty('A rua é obrigatória'),
      numero: zod.string().nonempty("O número é orbigatório"),
      complemento:zod.string(),
      bairro: zod.string().nonempty('O bairro é obrigatório'),
      cidade: zod.string().nonempty('A cidade é obrigatória'),
      uf: zod.string().nonempty('O UF é obrigatório'),
    })

    type CheckoutFormData = zod.infer<typeof checkoutFormSchema>

    const checkoutForm = useForm<CheckoutFormData>({
      resolver: zodResolver(checkoutFormSchema),
      defaultValues:{
        cep:'',
        bairro:'',
        cidade:'',
        complemento:'',
        numero:'',
        rua:'',
        uf:''
      }
    })
    
    const navigate = useNavigate()

    function handleCheckoutForm(data:CheckoutFormData){
      navigate('/success',{
        state:{
           rua:data.rua,
           numero:data.numero,
           cidade:data.cidade,
           uf:data.uf,
           bairro:data.bairro
      }})
      resetCart()
    }
    
    const {register,handleSubmit, formState:{errors}} = checkoutForm

    const totalItemsPrice = cartItems.reduce((total, cartItem)=>{
      const item = homeItems.find(i => i.id === cartItem.id )

      return total + (item?.price || 0) * cartItem.quantity
    },0)


    return (
      
        <form  onSubmit={handleSubmit(handleCheckoutForm)}>
          <Main>
            <LeftContainer>
                {/* Top */}
                <BaseContainer>
                    <Title>
                        <PinContainer>
                            <MapPin size={22} color="#C47F17"/>
                        </PinContainer>
                        <TitleContainer>
                            <h1>Endereço de Entrega</h1>
                            <p>Informe o endereço onde deseja receber seu pedido</p>
                        </TitleContainer>
                    </Title>
                    <FormContainer>
                        {/* CEP */}
                        <InputContainer>
                          <input
                            type="text"
                            placeholder="CEP"
                          {...register('cep')}
                          id="cep"
                            />
                          <small>{errors.cep && <small>{errors.cep.message}</small>}</small>
                        </InputContainer>

                        {/* Rua  */}
                        <InputContainer>
                          <input
                            type="text"
                            placeholder="Rua"
                            {...register('rua')}
                            />
                            {errors.rua && <small>{errors.rua.message}</small>}
                        </InputContainer>

                        {/* Número/Complemento */}
                        <NumberContainer>
                          {/* Número */}
                          <InputContainer>
                            <input
                              type="text"
                              placeholder="Número"
                              {...register('numero')}
                              />
                              <small>{errors.numero && <small>{errors.numero.message}</small>}</small>
                          </InputContainer>
                          {/* Complemento */}
                        
                          <input
                            type="text"
                            placeholder="Complemento"
                            {...register('complemento')}
                            />
                        </NumberContainer>

                        {/* Bairro/Cidade/UF */}
                        <InputGroup>
                        {/* Bairro */}
                          <InputContainer>
                            <input
                              type="text"
                              placeholder="Bairro"
                              {...register('bairro')}
                              />
                              {errors.bairro && <small>{errors.bairro.message}</small>}
                          </InputContainer>
                          {/* Cidade */}
                          <InputContainer>
                            <input
                              type="text"
                              placeholder="Cidade"
                              {...register('cidade')}
                              />
                              {errors.cidade && <small>{errors.cidade.message}</small>}
                          </InputContainer>
                          
                          {/* UF */}
                          <InputContainer>
                            <input
                              id="uf"
                              type="text"
                              placeholder="UF"
                              {...register('uf')}
                              />
                              {errors.uf && <small>{errors.uf.message}</small>}
                          </InputContainer>
                        </InputGroup>
                    </FormContainer>
                </BaseContainer>

                {/* Bottom */}
                <BaseContainer>

                  <Title>
                      <PinContainer>
                        <CurrencyDollar size={22} color="#8047f8"/>
                      </PinContainer>

                      <TitleContainer>
                        <h1>Pagamento</h1>
                        <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                      </TitleContainer>
                  </Title>

                  <PaymentContainer>

                    <PaymentButton className="btn" autoFocus name="credit"  onFocus={handleBtnValue}>
                        <PaymentButtonContainer>
                            <CreditCard size={14} color="#8047f8"/>
                            <div>CARTÃO DE CRÉDITO</div>
                        </PaymentButtonContainer>
                    </PaymentButton>

                    <PaymentButton name="debit" onFocus={handleBtnValue}>
                        <PaymentButtonContainer>
                            <Bank size={14} color="#8047f8"/>
                            <div>CARTÃO DE DÉBITO</div>
                        </PaymentButtonContainer>
                    </PaymentButton>

                    <PaymentButton name="cash" onFocus={handleBtnValue}>
                        <PaymentButtonContainer>
                            <Money size={14} color="#8047f8" />
                            <div>DINHEIRO</div>
                        </PaymentButtonContainer>
                    </PaymentButton>
                  </PaymentContainer>
                  
                </BaseContainer>
            </LeftContainer>

            <RightContainer>

            <ShoppingCard />

              {/* Summary */}
              <CheckoutSummary>
                <div>
                  <p>Total de itens</p>
                  <p>{formatCurrency(totalItemsPrice)}</p>
                </div>
                
                <div>
                  <p>Entrega</p>
                  <p>R$ 3,50</p>
                </div>

                <div>
                  <p>Total</p>
                  <p>{formatCurrency(totalItemsPrice + delivery)}</p>
                </div>
              </CheckoutSummary>

              {/* Button */}
              <ConfirmButtonContainer>
                <button disabled={!cartItems}>CONFIRMAR PEDIDO</button>
              </ConfirmButtonContainer>
            </RightContainer>
          </Main>
        </form>
    )
}