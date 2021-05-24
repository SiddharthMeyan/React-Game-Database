import React from "react";

export const SearchResults = ({ gamedetails }) => {
  return (
    <div>
      <div class="row ">
        <center>
          <h3 className="mt-4">Your search results: </h3>
        </center>
        {gamedetails.map((popular) => (
          <center>
            <div class="col-sm-6 my-3">
              <div class="card w-50">
                <div class="card-body">
                  <h5 class="card-title">{popular.name}</h5>
                  <img
                    src={popular.background_image}
                    className="card-img-top"
                    alt="..."
                    style={{ height: "200px", width: "287px" }}
                  />
                </div>
                <p>Rating: {popular.rating}/5</p>
              </div>
            </div>
          </center>
        ))}
      </div>
    </div>
  );
};
//
