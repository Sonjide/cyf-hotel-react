import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

export default function Order(props) {
  function orderOne() {
    setOrders(orders + 1);
  }
  const [orders, setOrders] = useState(0);
  return (
    <li>
      {props.orderType}: {orders}
      <RestaurantButton handler={orderOne} />
    </li>
  );
}
