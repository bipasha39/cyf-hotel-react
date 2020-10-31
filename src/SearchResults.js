import React, { useState } from "react";
import moment from "moment";

let SearchResults = props => {
  const [color, setColor] = useState(false);

  const colorhandler = () => {
    if (!color) {
      setColor(true);
    } else setColor(false);
  };
  return (
    <div>
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
            <th scope="col">Number of Nights</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((booking, i) => {
            const checkIn = moment(booking.checkInDate);
            const checkOut = moment(booking.checkOutDate);
            return (
              <tr
                key={i}
                className={color ? "highlight" : null}
                onClick={colorhandler}
              >
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
      <h6 className="tablebottom">CYF 2017</h6>
    </div>
  );
};

export default SearchResults;
