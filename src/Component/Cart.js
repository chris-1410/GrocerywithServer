import React, { useState, useEffect } from "react";
import "../Styles/cart.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Cart = ({ cart, setCart, handleChange }) => {
  const navigate = useNavigate();
  console.log("PRINTED PRODUCTS IN CART", cart);

  const showToastMessage1 = () => {
    toast.error(" CART CANNOT BE EMPTY !!!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const showToastMessage = () => {
    toast.success("Order Confirmed !!!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  // Hooks
  const [price, setPrice] = useState(0);
  const [userId, setuserId] = useState();

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  function getCustomerId() {
    var x = localStorage.getItem("email");

    const url2 = "http://localhost:9000/user-id";
    axios
      .post(url2, {
        email: x,
      })
      .then((res) => {
        setuserId(res.data.success);
      });
    console.log("userId " + userId);
  }

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.num * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
    getCustomerId();
  });

  // iterate over the products in the cart.
  // to get the quantity and total price of the products added in the cart.

  let finalcart = [];
  const confirmOrder = () => {
    
    if (cart.length == 0) {
      showToastMessage1();
    }
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
      let id = cart[i].id;
      let quantity = cart[i].num;
      let price = cart[i].price * cart[i].num;
      totalPrice += cart[i].price * cart[i].num;
      let small = [id, quantity, price];
      finalcart.push(small);
      if (i == cart.length - 1) {
        // callApi(finalcart)
        console.log(finalcart);

        const url = "http://localhost:9000/confirm-orders";
        axios
          .post(url, {
            orders: finalcart,
            total_price: totalPrice,
            user_id: userId,
          })
          .then((res) => {
            console.log(res);
            console.log("confirm-orders");
            showToastMessage();
            // navigate("/User");
          });
        finalcart = [];
      }
    }
    cart = [];
    setCart([]);
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
