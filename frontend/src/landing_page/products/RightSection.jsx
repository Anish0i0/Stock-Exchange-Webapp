import React from "react";

function RightSEction({
  productName,
  productDescription,
  learnMore,
  imageURL,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col mt-5">
          <h2>{productName}</h2>
          <p>{productDescription}</p>
          <div>
            <a href={learnMore}>
              Learn more <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="col">
          <img src={imageURL} />
        </div>
      </div>
    </div>
  );
}

export default RightSEction;
