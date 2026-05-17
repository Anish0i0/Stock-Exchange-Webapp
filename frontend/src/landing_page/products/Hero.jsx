import React from "react";

function Hero() {
  return (
    <div
      className=" text-center container border-bottom"
      style={{ padding: "100px 20px" }}
    >
      <h1 style={{ font: "20px" }}>Zerodha Products</h1>
      <h3 style={{ margin: "10px 0px 15px" }}>
        Sleek, modern, and intuitive trading platforms
      </h3>
      <p style={{ margin: "16px 0px 15px" }}>
        Check out our{" "}
        <a href="" style={{ textDecoration: "none" }}>
          investment offerings <i class="fa-solid fa-arrow-right"></i>
        </a>
      </p>
    </div>
  );
}

export default Hero;
