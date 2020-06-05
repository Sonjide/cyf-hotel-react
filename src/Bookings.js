import React, { useState } from "react";
import Search from "./Search.js";
import SearchResult from "./SearchResult.js";
import FakeBookings from "./data/fakeBookings.json";

function Bookings() {
  const [bookings, setBookings] = useState(FakeBookings);
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {/* line 16 - related to SearchResult.js */}
        <SearchResult customerInfo={bookings} />
      </div>
    </div>
  );
}

export default Bookings;

// #### 6. Show more bookings in the table

// **Instructions:** Instead of using your hard-coded data in the `<SearchResults />` component, load data from the `src/data/fakeBookings.json` file in the `<Bookings />` component and pass it as a prop to `<SearchResults />`. All the bookings in `src/data/fakeBookings.json` should now be displayed in your table.

// **Hint:** Look in the `<Bookings />` component for how to import data from a JSON file.

// **Test:** All the bookings in the file `src/data/fakeBookings.json` should be displayed in your table.
