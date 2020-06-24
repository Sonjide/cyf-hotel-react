import React from "react";

export default function RestaurantButton(props) {
  // console.log(props);
  return (
    <button onClick={props.orderOne} className="btn btn-primary">
      Add
    </button>
  );
}

//export default RestaurantButton;

//you can write a function starting with export default as the example show on line 3
