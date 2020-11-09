import React from "react";

function CustomerProfile(props) {
  console.log("customerProfile", props.id);
  return (
    <div>
      <p>Customer {props.id} Profile</p>
    </div>
  );
}

export default CustomerProfile;
