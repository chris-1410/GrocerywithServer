import React, { useState, useEffect } from "react";
import "../Styles/cart.css";
import axios from "axios";

const Cart = ({ cart, setCart, handleChange }) => {
  console.log("PRINTED PRODUCTS IN CART", cart);

  // Hooks
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.num * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  let finalcart = [];
  const confirmOrder = () => {
    for (let i = 0; i < cart.length; i++) {
      let id = cart[i].id;
      let name = cart[i].name;
      let quantity = cart[i].num;
      let price = cart[i].price * cart[i].num;
      let small = [id, name, quantity, price];
      finalcart.push(small);
      if (i == cart.length - 1) {
        // callApi(finalcart)
        console.log(finalcart);
        const url = "http://localhost:9000/confirm-orders";
        axios
          .post(url, {
            orders: finalcart,
          })
          .then((res) => {
            console.log(res.orders);
          });
      }
    }
  };
  return (
    <article>
      {cart.map((item) => (
        <div className="cart-box" key={item.id}>
          <div className="cart-img">
            <img src={item.image} />
            <p>{item.name}</p>
          </div>
          <div>
            <button onClick={() => handleChange(item, -1)}> - </button>
            <button>{item.num}</button>
            <button onClick={() => handleChange(item, 1)}> + </button>
          </div>
          <div>
            <span>{item.price}</span>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total Price</span>
        <span>Rs - {price}</span>
      </div>
      <button onClick={() => confirmOrder()}>Confirm Order</button>
    </article>
  );
};

export default Cart;
