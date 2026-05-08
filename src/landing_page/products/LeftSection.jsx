import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-3">
          <img src={imageURL} />
        </div>
        <div className="col-6 p-3 mt-5 v-align">
          <h2>{productName}</h2>
          <p>{productDescription}</p>
          <div>
            <a href={tryDemo}>
              Try More <i class="fa-solid fa-arrow-right"></i>
            </a>
            <a href={learnMore} style={{ marginLeft: "50px" }}>
              Learn more <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div>
            <a href={googlePlay}>
              <img src="media\images\googlePlayBadge.svg" />
            </a>
            <a href={appStore}>
              <img src="media\images\appstoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
