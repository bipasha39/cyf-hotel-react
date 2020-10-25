import React from "react";
const TouristInfoCards = () => {
  return (
    <div className="touristCard">
      <div className="card">
        <img
          src="https://www.publicsectorexecutive.com/write/MediaUploads/57_c._MarioGuti.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.
          </p>
          <a href="https://visitglasglow.com" className="btn btn-primary">
            Glasglow
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://london.ac.uk/sites/default/files/styles/max_1300x1300/public/2018-10/london-aerial-cityscape-river-thames_1.jpg?itok=6LenFxuz"
          className="card-img-top"
        />
        <div className="card-body">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.
          </p>
          <a href="https://visitlondon.com" className="btn btn-primary">
            London
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://media.timeout.com/images/105237972/image.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.
          </p>
          <a href="https://visitmanchester.com" className="btn btn-primary">
            Manchester
          </a>
        </div>
      </div>
    </div>
  );
};
export default TouristInfoCards;
