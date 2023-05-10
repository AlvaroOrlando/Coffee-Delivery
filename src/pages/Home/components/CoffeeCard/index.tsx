// import { Card, CardFooter, CardFooterLeft, CardFooterRight, CoffeeShopppingCart, Counter, TitleContainer } from "./styles";
// import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";
// // import {useState} from 'react'

// interface CoffeeCardProps {
//     src: string;
//     title: string;
//     title2: string | undefined;
//     title3: string | undefined;
//     subtitle:string;
//     description:string;
//     price:string;
//     id:number;
//     addToCart: (id:number) => void;
//     removeFromCart: (id:number) => void;
// }


// export function CoffeeCard({
  
//   src, 
//   title, 
//   title2, 
//   title3, 
//   subtitle, 
//   description, 
//   price,
//   addToCart,
//   removeFromCart,
//   id,

// }:CoffeeCardProps){



//     function handleAddToCart(){
//       addToCart(id)
//     }

//     function handleRemoveFromCart(){
//       removeFromCart(id)
//     }

//     return (
//         <Card>

//           {/* Image */}
//           <div>
//             <img src={src} alt="" />
//           </div>

//           {/* Title */}
//           <TitleContainer>
//             <p>{title}</p>
//             <p style={title2 ? {display:'block'} : {display:'none'}}>{title2}</p>
//             <p style={title3 ? {display:'block'} : {display:'none'}}>{title3}</p>
//           </TitleContainer>
          
//           <h2>{subtitle}</h2>
//           <p>{description}</p>

//           <CardFooter>

//             {/* Price */}
//             <CardFooterLeft>
//                 <span>R$</span>
//                 <span>{price}</span>
//             </CardFooterLeft>
            
//             {/* Counter */}
//             <CardFooterRight>
//               <Counter>
//                 <button onClick={handleRemoveFromCart}>
//                     <Minus/>
//                 </button>

//                 <input 
//                   type="number" 
//                   value={0}
//                   min={0}
//                   max={99}
//                   />

//                 <button onClick={handleAddToCart}>
//                   <Plus/>
//                 </button>
//               </Counter>
//               <CoffeeShopppingCart>
//                   <ShoppingCartSimple/>
//               </CoffeeShopppingCart>
//             </CardFooterRight>

//           </CardFooter>
//         </Card>
//     )
// }