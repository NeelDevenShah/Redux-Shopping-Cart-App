import React from "react";
import { useDispatch } from "react-redux";
import "./Cart.css";
import { cartActions } from "./../store/Cart-slice";
const CartItem = ({ name, quantity, total, price, id }) => {
  const dispatch=useDispatch();
  //The difference between the incrementCartItem and the decrementCartItem is that, we have passed an
  //object in the incr. by putting it in ({}) while in dec. we have just passed the id by ()
  const incrementCartItem=()=>{
    dispatch(cartActions.addToCart({
      name,
      id,
      price
    }));
  }
  const decrementCartItem=()=>{
    dispatch(cartActions.removeFromCart(id)) 
  }

return (
    <div className="cartItem">
      <h2> {name}</h2>
      <p>${price} /-</p>
      <p>x{quantity}</p>
      <article>Total ${total}</article>
      <button className="cart-actions" onClick={decrementCartItem}>-</button>
      <button className="cart-actions" onClick={incrementCartItem}>+</button>
    </div>
  );
};

export default CartItem;
