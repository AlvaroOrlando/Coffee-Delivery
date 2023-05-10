import { IconContainer, LeftContainerBottomItem } from "./styles";
import * as Icon from 'phosphor-react'


interface ItemProps {
  text: string;
  icon: Icon.IconProps;
  variant: 'yellowDark' | 'yellow' | 'baseText' |'purple';
}

export function HomeTopContainerItem({icon, text, variant}:ItemProps){
    return (
        <>
          <LeftContainerBottomItem>
            <IconContainer variant={variant}>
              <>
               {icon}
              </>
            </IconContainer>
            <span>{text}</span>
          </LeftContainerBottomItem>
        </>
    )
}