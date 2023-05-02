import { LogoContainer } from "./styles";
import   logo from '../../assets/Logo.svg'

export function Logo(){
    return (
        <LogoContainer>
            <img src={logo} alt="" />
        </LogoContainer>
    )
}