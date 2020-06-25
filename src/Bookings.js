import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResult from "./SearchResult.js";

function Bookings() {
  const [bookings, setBookings] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const search = searchVal => {
    //console.info("TO DO!", searchVal);

    const result = bookings.filter(
      person =>
        person.firstName.toUpperCase() === searchVal.toUpperCase() ||
        person.surname.toUpperCase() === searchVal.toUpperCase()
    );
    setBookings(result);
  };

  useEffect(() => {
    fetch(`https://cyf-react.illicitonion.com`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setBookings(data);
      });
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} setSearchTerm={setSearchTerm} />
        {bookings.length > 0 ? (
          <SearchResult customerInfo={bookings} search={searchTerm} />
        ) : (
          <p className="loading">Loading Customer Data Now...</p>
        )}
        {/* <SearchResults customerInfo={bookings} /> */}
      </div>
    </div>
  );
}

export default Bookings;
