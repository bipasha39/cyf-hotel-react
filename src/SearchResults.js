import React from "react";
import moment from "moment";
import FakeBookings from "./data/fakeBookings.json";

let SearchResults = () => {
  return (
    <table className="table table-striped">
      <thead className="thead-dark">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">First name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room ID</th>
          <th scope="col">Check in Date</th>
          <th scope="col">Check out date</th>
        </tr>
      </thead>
      <tbody>
        {FakeBookings.map((booking, i) => {
          const checkIn = moment(booking.checkInDate);
          const checkOut = moment(booking.checkOutDate);
          return (
            <tr key={i}>
              <th scope="row">{booking.id}</th>
              <td>{booking.title}</td>
              <td>{booking.firstName}</td>
              <td>{booking.surname}</td>
              <td>{booking.email}</td>
              <td>{booking.roomId}</td>
              <td>{booking.checkInDate}</td>
              <td>{booking.checkOutDate}</td>
              <td>{checkOut.diff(checkIn, "days")}</td>
              {/* <td>{booking.checkInDate.diff(booking.checkOutDate, "days")}</td> */}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
