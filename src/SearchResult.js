// #### 5. Create a table to show hotel bookings

// **Instructions:** Create a `<SearchResults />` component that shows hotel bookings in a `<table>` element. Each booking will have an `id`, `title`, `first name`, `surname`, `email`, `room id`, `check in date` and `check out date`.
// You can make up data in the `<SearchResults />` component to show in the table. Then show `<SearchResults />` component within the `<Bookings />` component that is provided. Be sure to split out your components into small well-named components, similar to the method used in exercise 1.

// **Hint:** You will find some useful `<table>` examples in the [Bootstrap documentation for tables](https://getbootstrap.com/docs/4.2/content/tables/#examples)

// **Test:** A table should render with a column for each booking attribute. The table can show more than one booking. The bookings that are displayed can be made up and hardcoded for now.

//research table structure react component - https://dev.to/abdulbasit313/an-easy-way-to-create-a-customize-dynamic-table-in-react-js-3igg
//https://dev.to/abdulbasit313/learn-how-to-create-react-js-table-with-hooks-that-has-delete-functionality-too-2jjb

import React from "react";
import Bookings from "./Bookings";

// function SearchResult(props) {
//   // console.log(props)
//   <div>
//     {/* <table className="table">
//       <thead>
//         <tr>
//           <th scope="col">Id</th>
//           <th scope="col">Title</th>
//           <th scope="col">First Name</th>
//           <th scope="col">Surname</th>
//           <th scope="col">Email</th>
//           <th scope="col">Room id</th>
//           <th scope="col">Number Of Nights</th>
//           <th scope="col">Check In Date</th>
//           <th scope="col">Check Out Date</th>
//         </tr>
//       </thead>
//       <tbody>
// {/* Bookings.js line 16 = varName bookings is the same */}
// {/* {props.bookings.map((reservation, index) =>{
//           <tr key={index}>
//             <td>{reservation.id}</td>
//             <td>{reservation.title}</td>
//             <td>{reservation.firstName}</td>
//             <td>{reservation.surname}</td>
//             <td>{reservation.email}</td>
//             <td>{reservation.roomId}</td>
//             <td>{reservation.numberOfNights}</td>
//             <td>{reservation.checkInDate}</td>
//             <td>{reservation.checkOutDate}</td>
//           </tr> */}
//     //   </tbody>
//     //     ))} */}
//     //   </table>
//   </div>
// }

// export default SearchResult;
