import React from "react";

function TouristInfoCards() {
  return (
    <div>
      {/* use of divs based on Lucy's grid.css*/}

      <div className="row">
        <div className="col-4">
          {/* Glasgow - Photo taken above Glasgow Queen Street train station. https://kraft.photo by Artur Kraft */}{" "}
          <div className="touristInfoCard">
            <img
              src="https://images.unsplash.com/photo-1531152127291-ea24c3b2a1da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
              alt=""
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
        <div className="col-4">
          {/* Manchester - Photo by William McCue */}
          <div className="touristInfoCard">
            <img
              src="https://images.unsplash.com/photo-1515586838455-8f8f940d6853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2568&q=80"
              alt=""
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
        <div className="col-4">
          {/* London - Tower Bridge - Photo by Charles Postiaux */}
          <div className="touristInfoCard">
            <img
              src="https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
              alt=""
              className="card-img-top"
            />
            <div className="card-body">
              <a href="https://www.visitlondon.com" className="btn btn-primary">
                Visit London
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TouristInfoCards;
