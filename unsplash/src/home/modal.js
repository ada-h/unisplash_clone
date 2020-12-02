import React from "react";

const Modal = ({ closebtn, photo }) => {
  return (
    <div className="my-modal" onClick={() => closebtn(false)}>
      <div className="close-modal">
        <span onClick={() => closebtn(false)}>×</span>
      </div>
      {photo.user === undefined ? (
        <div className="my-modal-content br-12 skeleton">
          <div className="skeleton-image"> </div>
          <div className="p-20">
            <p className="skeleton-name"></p>
            <p className="skeleton-location"></p>
          </div>
        </div>
      ) : (
        <div className="my-modal-content br-12">
           
          <img
            src={photo.urls.regular}
            className="object-fit"
            alt={photo.alt_description}
            width="100%"
            height="450px"
          />
        
          <div className="p-20">
            <h6> {photo.user.first_name !== null ? photo.user.first_name : " " + photo.user.last_name !== null ? photo.user.last_name : ""}</h6>
            <p className="t-12"> {photo.user.location}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
