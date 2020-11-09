import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
//import FakeBookings from "./data/fakeBookings.json";//

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  //instruction 19//

  const search = searchVal => {
    const filteredBooking = bookings.filter(
      booking =>
        booking.firstName === searchVal || booking.surName === searchVal
    );
    setBookings(filteredBooking);
  };

  //instruction 16///
  useEffect(() => {
    console.log("Fetching data from cyf hotel");

    fetch(`https://cyf-react.glitch.me`)
      .then(res => res.json())
      .then(data => {
        setBookings(data);
      });
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} />
      </div>
    </div>
  );
};

export default Bookings;
