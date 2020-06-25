import React, { useState, useEffect } from "react";

const CustomerProfile = props => {
  const [customerProfile, setCustomerProfile] = useState([]);
  useEffect(() => {
    fetch(`https://cyf-react.illicitonion.com/customer/{props.id}`)
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
