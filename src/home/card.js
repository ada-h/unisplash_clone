import React from "react";

const Card = ({ img, description, name, location }) => {
  return (
    <div className="image-container br-12">
      <img
        src={img}
        className="br-12 card-img"
        alt={description}
        width="100%"
      />
      <div className="t-white mast">
        <p className="t-14 mb-0">{name}</p>
        <p className="t-12"> {location}</p>
      </div>
    </div>
  );
};

export default Card;
