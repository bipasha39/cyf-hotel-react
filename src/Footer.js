import React from "react";
const Footer = props => {
  return (
    <div className="footer">
      <ul>
        {props.Contactinfo.map((item, index) => {
          console.log(index);
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Footer;
