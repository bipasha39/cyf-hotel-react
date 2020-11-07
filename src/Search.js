import React, { useState } from "react";
import SearchButton from "./SearchButton.js";

const Search = props => {
  //instruction number 17//
  const [searchInput, setSearchInput] = useState("");
  function handleSearchInput(event) {
    let eventValue = event.target.value;
    setSearchInput(eventValue);
    console.log(eventValue);
  }
  //number 18 function
  function handlesubmit(event) {
    event.preventDefault();
    console.log(props.search(searchInput));
  }

  //instruction 18 in <form>//
  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form className="form-group search-box" onSubmit={handlesubmit}>
            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">
              <input
                type="text"
                id="customerName"
                value={searchInput}
                className="form-control"
                placeholder="Customer name"
                onChange={handleSearchInput}
              />
            </div>
            <SearchButton />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
