import { LocationContainer } from "./styles";
import  { MapPin } from 'phosphor-react'

export function Location(){
    return (
        <LocationContainer>
            <MapPin color="#4B2995" size={22}/>
        </LocationContainer>
    )
}