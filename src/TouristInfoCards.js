// 3. Create and use a new component to show info cards

// Instructions: In src/App.js, above the <Bookings /> component add a new component called TouristInfoCards which shows 3 cards. A card is a common user interface pattern with an image at the top and some related text underneath. The cards must link to peoplemakeglasgow.com, visitmanchester.com and visitlondon.com. The cards should contain the name of the city and an image of the city.

// Hint: Use the same className as the example below to benefit from Bootstrap library which is already imported for you in the project. Use the JSX code below as an example of one card (note that in JSX, you'll need to use className instead of class):

// <div className="card">
// 	<img src="..." className="card-img-top" />
// 	<div className="card-body">
// 		<a href="#" className="btn btn-primary">Go somewhere</a>
// 	</div>
// </div>

// make sure the pictures are free, adhere to copyright laws, same size from website www.unsplash.com

// **Test:** 3 info cards should be displayed on the page for each city (Glasgow, Manchester, London). Each card should link to the correct website. Completed.

import React from "react";

function TouristInfoCards() {
  return (
    <div>
      {/* use of divs based on Lucy's grid.css*/}
      <div className="rowFlexContainer">
        <div className="columnWidth">
          <div className="card">
            {/* Glasgow - Photo taken above Glasgow Queen Street train station. https://kraft.photo by Artur Kraft */}{" "}
            <div className="touristInfoCard">
              <img
                src="https://images.unsplash.com/photo-1531152127291-ea24c3b2a1da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
                className="card-img-top"
              />
              <div className="card-body">
                <a
                  href="https://peoplemakeglasgow.com"
                  className="btn btn-primary"
                >
                  Visit Glasgow
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            {/* Manchester - Photo by William McCue */}
            <div className="touristInfoCard">
              <img
                src="https://images.unsplash.com/photo-1515586838455-8f8f940d6853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2568&q=80"
                className="card-img-top"
              />
              <div className="card-body">
                <a
                  href="https://www.visitmanchester.com"
                  className="btn btn-primary"
                >
                  Visit Manchester
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            {/* London - Tower Bridge - Photo by Charles Postiaux */}
            <div className="touristInfoCard">
              <img
                src="https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                className="card-img-top"
              />
              <div className="card-body">
                <a
                  href="https://peoplemakeglasgow.com"
                  className="btn btn-primary"
                >
                  Visit London
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TouristInfoCards;
