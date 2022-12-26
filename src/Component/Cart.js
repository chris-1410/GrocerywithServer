import React, { useState, useEffect } from "react";
import "../Styles/cart.css";

const Cart = ({ cart, setCart, handleChange }) => {

  console.log("PRINTED PRODUCTS IN CART", cart)
  
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

  // const [productName, setProductName] = useState("");
  // const [productQuantity, setProductQuantity] = useState("");
  // const [productPrice, setProductPrice] = useState("");
  // const [producttotalprice, setProductTotalPrice] = useState("");

  // const confirmOrder = () => {
  //   let orderDetail = JSON.parse(
  //     `${localStorage.getItem("orderDetail") || "[]"}`
  //   );

  //   const date = new Date();
  //   const gen_Id = date.getTime();

  //   let payload = {
  //     id: gen_Id,
  //     name: productName,
  //     quantity: productQuantity,
  //     price: productPrice,
  //     totalprice: producttotalprice,
  //   };
  //   // console.log("zzzzz", payload);

  //   orderDetail.push(payload);

  //   localStorage.setItem("orderDetail", JSON.stringify(orderDetail));
  // };


  // function confirmOrders(e) {
  //   e.preventDefault();
  //   Axios.post(url, {
  //     email: data.email,
  //     password: data.password,
  //   }).then((res) => {
  //     if (res.data.success == "True") {
  //       let role = res.data.role;
  //       alert("Logged in Successfully");
  //       navigate("/navbarmain");
  //     } else {
  //       alert("Log in Failed");
  //     }
  //   });
  // }



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
      <button className="cnf-btn" >
      {/* onClick={confirmOrder} */}
        {/* onClick={() => confirmOrders} */}
        Confirm Order
      </button>
    </article>
  );
};

export default Cart;
