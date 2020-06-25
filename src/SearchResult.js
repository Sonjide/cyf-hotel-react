import React, { useState } from "react";
import TableRow from "./TableRow";
import CustomerProfile from "./CustomerProfile";

function SearchResult(props) {
  const [id, setId] = useState("");
  const filterCustomerInfo = props.customerInfo.filter(
    customer => customer.firstName === props.search
  );

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room Id</th>
          <th scope="col">Number Of Nights</th>
          <th scope="col">Check In Date</th>
          <th scope="col">Check Out Date</th>
        </tr>
      </thead>
      <tbody>
        {filterCustomerInfo.map((reservation, index) => {
          return <TableRow reservation={reservation} key={index} />;
        })}
        <CustomerProfile id={id} setId={setId} />
      </tbody>
    </table>
  );
}

export default SearchResult;
