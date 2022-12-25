import React, { useState, useEffect } from "react";
// import list from "../data";
import { Cards } from "./Card";
import axios from "axios";
import "../Styles/Products.css";

export const Products = ({ handleClick }) => {

  const [data, setData] = useState([]);

  const fetchData = async () => {
    const data = await axios.get("http://localhost:9000/products-list");
    console.log(data.data);
    setData(data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section>
      {data.map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
  );
};
