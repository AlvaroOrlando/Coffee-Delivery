import styled from "styled-components";

export const MainContainer = styled.section`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: space-around;
   gap:3.5rem;
   padding-top:5.75rem ;
   padding-bottom: 5.75rem;
   backdrop-filter: blur(80px);
`

export const LeftContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   gap: 4.125rem;
`

export const LeftContainerTop = styled.div`

   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   gap: 1rem;

   & h1{
     font-family: 'Baloo 2', cursive;
     font-weight: 800;
     font-size:3rem;
     line-height: ${props => props.theme['--130']};
     color: ${props => props.theme['--base-title']};
   }

   & p {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size:1.25rem;
    line-height: ${props => props.theme['--130']};
    color: ${props => props.theme['--base-subtitle']};
   }

`

export const RightContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
`

export const LeftContainerBottom = styled.div`
  width: 100%;
  max-width: 35.438rem;
  gap: 2.5rem;
  display: flex;
  align-items:center;
  justify-content: space-between;
`

export const LeftContainerBottomLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  gap: 1.25rem;
`

export const LeftContainerBottomRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  gap: 1.25rem;
`

