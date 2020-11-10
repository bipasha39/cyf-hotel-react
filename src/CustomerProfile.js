import React, { useEffect, useState } from "react";

function CustomerProfile(props) {
  const [user, setUser] = useState({});

  //instruction 21

  useEffect(() => {
    console.log("Fetching data for customer ID");
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then(res => res.json())
      .then(data => {
        setUser(data);
      });
  }, [props.id]);

  console.log(user);
  return (
    <div className="customer-profile">
      <p>Customer {props.id} Profile</p>
      <p>
        <span>PhoneNumber:</span>
        {user.phoneNumber}
      </p>
      <p>
        {" "}
        <span>Email: </span>
        {user.vip ? user.email : null}
      </p>
    </div>
  );
}

export default CustomerProfile;
