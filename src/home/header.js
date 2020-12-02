import React from "react";

const Header = ({ text, inputChange, status, setStatus, search }) => {
  return (
    <div className="hero-div">
      {status !== 0 ? <p className="t-white home-link" onClick={()=>setStatus(0)}> Home</p> : ""}
      {status === 0 ? (
        <div className="container hero-search">
          <button className="search-icon"><i className="fa fa-search"></i></button>
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
