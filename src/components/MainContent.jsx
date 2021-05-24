import React from "react";

export const MainContent = ({ popularGame }) => {
  return (
    <div>
      <center>
        <h1 className="my-2">Most Popular Game</h1>
      </center>
      <div class="row ">
        {popularGame.map((popular) => (
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
              </div>
            </div>
          </center>
        ))}
      </div>
    </div>
  );
};
