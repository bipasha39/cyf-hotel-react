import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
//import FakeBookings from "./data/fakeBookings.json";//

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

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
    fetch(`https://cyf-react.glitch.me/delayed`)
      .then(res => res.json())
      .then(data => {
        setBookings(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App-content">
      {/*this is for 23 error instruction*/}
      {bookings ? (
        <div className="container">
          <Search search={search} />
          {/*this is for 22 delayed instruction*/}
          {!loading ? (
            <SearchResults results={bookings} />
          ) : (
            <span>Loading...</span>
          )}
        </div>
      ) : (
        <span>error...</span>
      )}
    </div>
  );
};

export default Bookings;
