import { Header } from "../../components/Header";
import { HomeCoffeeContainer } from "../../pages/Home/components/HomeCoffeeContainer";
import { HomeTopContainer } from "./components/HomeTopContainer";
import {  Main, Title } from "./styles";

export function Home(){
    return (
      <>
        <Header />

        <Main>
            <HomeTopContainer />
            
            <Title>
              <h1>Nossos Cafés</h1>
            </Title>

            <HomeCoffeeContainer />
        </Main>
      </>
    )
}