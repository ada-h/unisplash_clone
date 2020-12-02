import React from "react";

const Header = ({ text, inputChange, status, search }) => {
  return (
    <div className="hero-div">
      {status === 0 ? (
        <div className="container hero-search">
          <button type="submit"><i className="fa fa-search search-icon"></i></button>
          <input
            onChange={(e) => inputChange(e.target.value)}
            onKeyDown={(e) => search(e)}
            type="text"
            className="form-control br-12"
            placeholder="Search for photo"
          />
           
        </div>
      ) : status === 1 ? (
        <div className="hero-text">
          <h1>
            {" "}
            Searching for <span className="dark-white">"{text}"</span>
          </h1>
        </div>
      ) : (
        <div className="hero-text">
          <h1>
            {" "}
            Search Results for <span className="dark-white">"{text}"</span>
          </h1>
        </div>
      )}
    </div>
  );
};

export default Header;
