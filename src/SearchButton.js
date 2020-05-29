// 1. Extract the search button in its own component
// Instructions: Extract the search <button> from the src/Search.js file to be its own separate component. You can name it SearchButton. Import and use this new component in src/Search.js.
//link page to Search.js page
//Test: The search button should still render on the page.- clicked button and it refreshes.

import React from "react";

function SearchButton() {
  return <button className="btn btn-primary">Search</button>;
}

export default SearchButton;
