import React from "react";
const Footer = props => {
  return (
    <div>
      <ul>
        {props.Contactinfo.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Footer;
