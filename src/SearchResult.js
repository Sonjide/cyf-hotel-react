// #### 5. Create a table to show hotel bookings
// **Instructions:** Create a `<SearchResults />` component that shows hotel bookings in a `<table>` element. Each booking will have an `id`, `title`, `first name`, `surname`, `email`, `room id`, `check in date` and `check out date`.
// You can make up data in the `<SearchResults />` component to show in the table. Then show `<SearchResults />` component within the `<Bookings />` component that is provided. Be sure to split out your components into small well-named components, similar to the method used in exercise 1.
// **Hint:** You will find some useful `<table>` examples in the [Bootstrap documentation for tables](https://getbootstrap.com/docs/4.2/content/tables/#examples)
// **Test:** A table should render with a column for each booking attribute. The table can show more than one booking. The bookings that are displayed can be made up and hardcoded for now.
//research table structure react component - https://dev.to/abdulbasit313/an-easy-way-to-create-a-customize-dynamic-table-in-react-js-3igg
//https://dev.to/abdulbasit313/learn-how-to-create-react-js-table-with-hooks-that-has-delete-functionality-too-2jjb

// #### 6. Show more bookings in the table
// **Instructions:** Instead of using your hard-coded data in the `<SearchResults />` component, load data from the `src/data/fakeBookings.json` file in the `<Bookings />` component and pass it as a prop to `<SearchResults />`. All the bookings in `src/data/fakeBookings.json` should now be displayed in your table.
// **Hint:** Look in the `<Bookings />` component for how to import data from a JSON file.
// **Test:** All the bookings in the file `src/data/fakeBookings.json` should be displayed in your table.

// #### 7. Calculate and show the number of nights for each booking
// **Instructions:** Add another column to your `<SearchResults />` table which shows the number of nights a guest is staying.
// **Hint:** Try installing the [moment.js library](http://momentjs.com/) (you'll need to install it with `npm install moment --save`) and using the [`.diff()` method](http://momentjs.com/docs/#/displaying/difference/) to compare dates.
// **Test:** Each booking in your table should show the number of nights in a separate column. For example, Mr John Doe has a booking for **2** nights.

import React from "react";
import moment from "moment";

function SearchResult(props) {
  //console.log(props)
  return (
    <div>
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
        {props.customerInfo.map((reservation, index) => {
          // here I used a variable name for calculating the "numberOfNight" (units) using a function called moment which returns the object(reservation from the json.file with all customer info).checkoutdata(which is a key).diff(which is a method) that returns a 2 strings called reservation.checkInDate and days in units.
          // const numberOfNights = moment(reservation.checkOutDate).diff(reservation.checkInDate, "days");
          return (
            <tbody key={index}>
              <tr>
                <td>{reservation.id}</td>
                <td>{reservation.title}</td>
                <td>{reservation.firstName}</td>
                <td>{reservation.surname}</td>
                <td>{reservation.email}</td>
                <td>{reservation.roomId}</td>
                {/* <td>{numberOfNights}</td> */}
                <td>
                  {moment(reservation.checkOutDate).diff(
                    reservation.checkInDate,
                    "days"
                  )}
                  {/* the above line of code is the same as variable name numberOfNights on line 43 and 53*/}
                </td>
                <td>{reservation.checkInDate}</td>
                <td>{reservation.checkOutDate}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default SearchResult;
