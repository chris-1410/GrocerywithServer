import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function ShowOrders() {

    const [data, setData] = useState([]);

    const fetchData = async () => {
        const data = await axios.get("http://localhost:9000/orders-list");
        // console.log(data.data);
        setData(data.data);
    };

    useEffect(() => {
        fetchData();
    }, []);
    
    return (
        <div>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">OrderId</th>
                        <th scope="col">TotalPrice</th>
                        <th scope="col">CustomerId</th>
                        <th scope="col">Order Date</th>
                        {/* <th scope="col">Quantity</th>
                        <th scope="col">Price</th> */}
                    </tr>
                </thead>
                {data.map((ord) => (
                    <tbody className="table-data shadow-lg">
                        <tr>
                            <td>{ord.order_id}</td>
                            <td>{ord.total_price} </td>
                            <td>{ord.user_id}</td>
                            <td>{ord.order_date.split("T")[0]}</td>
                            {/* <td>{ord.Quantity}</td>
                            <td>{ord.Price}</td> */}
                        </tr>
                    </tbody>
                ))}
            </table>
        </div>
    );
}
export default ShowOrders;

