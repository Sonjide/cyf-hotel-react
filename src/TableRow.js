import React, { useState } from "react";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";

function TableRow(props) {
  const [isHighlighted, setIsHightlighted] = useState(false);
  //console.log(props)
  function handleClick() {
    setIsHightlighted(!isHighlighted);
  }
  return (
    <tr
      onClick={handleClick}
      style={{ backgroundColor: isHighlighted ? "yellow" : "" }}
    >
      <td>{props.reservation.id}</td>
      <td>{props.reservation.title}</td>
      <td>{props.reservation.firstName}</td>
      <td>{props.reservation.surname}</td>
      <td>{props.reservation.email}</td>
      <td>{props.reservation.roomId}</td>
      <td>{props.reservation.numberOfNights}</td>
      <td>{props.reservation.checkInDate}</td>
      <td>{props.reservation.checkOutDate}</td>
      <td>
        {moment(props.reservation.checkOutDate).diff(
          props.reservation.checkInDate,
          "days"
        )}
      </td>
    </tr>
  );
}

export default TableRow;
