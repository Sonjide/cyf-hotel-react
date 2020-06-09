// 2. Extract the header in its own component
// Instructions: Extract the <header> from the src/App.js file to be its own separate component called Heading. Make sure that you import and render the <Heading /> component within src/App.js. In the Heading component, render the hotel's logo in an <img> (you can use https://image.flaticon.com/icons/svg/139/139899.svg or find your own image URL). You can adjust the CSS by editing src/App.css to make your Heading looks better if necessary.
//

// Test: The header should be displayed with a logo on the page.save

import React from "react";

function Header() {
  return (
    <div className="page-header">
      <header className="App-header">
        <img
          className="App-logo"
          src="https://image.flaticon.com/icons/svg/139/139899.svg"
        />
        CYF Hotel
      </header>
    </div>
  );
}

export default Header;

// app.css - LOGO inside the black-CYF title box
