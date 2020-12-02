import React from "react";
import Card from "./card";

const heights = ["250px", "340px", "270px", "320px", "300px", "280px"];

const PhotoGallery = ({ photos, getImageDetail, status }) => {
  return (
    <div className="container gallery">
      <div className="card-columns">
        {(!photos.length > 0) & (status === 2) ? (
          <div className="t-center dark-white">
            {" "}
            <p> *No Images found</p>
          </div>
        ) : (!photos.length > 0) & (status !== 2) ? (
          heights.map((each, i) => {
            return (
              <div className="card" key={i}>
                <div className="skeleton" style={{ height: each }}>
                  <div className="t-white mast">
                    <p className="skeleton-name"></p>
                    <p className="skeleton-location"></p>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          photos.map((each, i) => {
            return (
              <div
                className="card br-12"
                key={i}
                onClick={() => getImageDetail(each.id)}
              >
                <Card
                  img={each.urls.regular}
                  description={each.alt_description}
                  name={
                    each.user.first_name !== null
                      ? each.user.first_name
                      : " " + each.user.last_name !== null
                      ? each.user.last_name
                      : " "
                  }
                  location={each.user.location}
                />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default PhotoGallery;
