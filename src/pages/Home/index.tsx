import { HeaderMenu } from "../../components/HeaderMenu";
import { Logo } from "../../components/Logo";
import { Header, Main } from "./styles";

export function Home(){
    return (
      <>
        <Header>
            <Logo />
            <HeaderMenu />
        </Header>

        <Main>
            Main
        </Main>
      </>
    )
}