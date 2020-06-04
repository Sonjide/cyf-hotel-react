import React from "react";

export default function RestaurantButton(props) {
  // console.log(props);
  return (
    <button onClick={props.handler} className="btn btn-primary">
      Add
    </button>
  );
}
