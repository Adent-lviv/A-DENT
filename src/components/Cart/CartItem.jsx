

import {
  addToCart,
  decreaseQuantity,
  removeFromCart,
  
} from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import { CartImageWrap, CartProductItem, NameItemsCart, PriceCart } from "./styles";
import { BtnCount } from "../BasicComponents/styles";
import { CardBtns, CardBtnTrash } from "../ProductCard/styles";
import { FaTrash } from "react-icons/fa";

export default function CartItem({item}) {


  const dispatch = useDispatch();
  return (

            <CartProductItem
              key={item.id}
             
            >
                <CartImageWrap>
              <img
                src={item.imageUrl}
                alt={item.name}
                style={{ width: 150, height: 150, objectFit: "cover" }}
              />
              <NameItemsCart style={{textAlign:"center"}}>{item.name}</NameItemsCart></CartImageWrap>


            <CartImageWrap>
                <PriceCart>{item.price}</PriceCart>
                 <CardBtns>
                <BtnCount onClick={() => dispatch(decreaseQuantity(item.id))}>
                  -
                </BtnCount>
                <span style={{ margin: "0 10px" }}>{item.quantity}</span>
                <BtnCount onClick={() => dispatch(addToCart(item))}>+</BtnCount>
              </CardBtns>
            </CartImageWrap>
                
              <CardBtnTrash style={{height:"fit-content"}} onClick={() => dispatch(removeFromCart(item.id))}>
                              <FaTrash />
                            </CardBtnTrash>

            </CartProductItem>
        
    
  );
}
