/*8. Render the Restaurant component -
// The term “render prop” refers to a technique for sharing code between React components using a prop whose value is a function.
This is done by adding "import Restaurant from "./Restaurant"" in the App.js file and import React from "react" on this file. 
- see link https://reactjs.org/docs/render-props.html#:~:text=A%20component%20with%20a%20render,implementing%20its%20own%20render%20logic.&text=Libraries%20that%20use%20render%20props,how%20to%20write%20your%20own.

Instructions: Within the src/App.js file, render the <Restaurant /> component (that is provided for you in src/Restaurant.js) underneath the <Bookings /> component.
Test: The restaurant orders should render on the page. The restaurant section does now appears on the webpage.
*/

import React, { useState } from "react";

const Restaurant = () => {
  const [orders, setOrders] = useState(0);
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {orders} <button className="btn btn-primary">Add</button>
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
