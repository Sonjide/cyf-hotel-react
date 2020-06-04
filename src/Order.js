import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

export default function Order() {
  function orderOne() {
    setOrders(orders + 1);
  }
  const [orders, setOrders] = useState(0);
  return (
    <li>
      Pizzas: {orders}
      <RestaurantButton handler={orderOne} />
    </li>
  );
}
