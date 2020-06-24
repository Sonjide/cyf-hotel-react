import React, { useState, useEffect } from "react";
import SearchResult from "./SearchResult";
import TableRow from "./TableRow";

const CustomerProfile = props => {
  const [customerProfile, setCustomerProfile] = useState([]);
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/{props.setId}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        console.log(data.email);
        setCustomerProfile(data);
      });
  }, [props.setId]);

  if (!customerProfile) {
    return null;
  } else {
    return (
      <div>
        <h5>Customer {customerProfile.id} Profile:</h5>
        <ul>
          <li>Customer email: {customerProfile.email}</li>
          <li>VIP? {customerProfile.vip ? <p>YES</p> : <p>NO</p>} </li>
          <li>Customer phone number: {customerProfile.phoneNumber}</li>
        </ul>
      </div>
    );
  }
};
export default CustomerProfile;

// check Pokedex excercise
{
  /* <div>
<button className="tableButton">{props.id} Show Profile</button>
</div> */
}
