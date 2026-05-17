import React from "react";

function Hero() {
  return (
    <>
      <div
        className="about-header container border-bottom text-center"
        style={{ color: "#424242", padding: "100px 20px" }}
      >
        <div className="row">
          <h2>
            We pioneered the discount broking model in India.<br></br> Now, we
            are breaking ground with our technology.
          </h2>
        </div>
      </div>
      <div
        className="container"
        style={{ color: "#424242", color: "16px", padding: "80px 20px 0px" }}
      >
        <div className="row">
          <div className="col-6">
            <p
              style={{
                color: "#424242",
                font: "16px",
                margin: "16px 0px 15px",
              }}
            >
              We kick-started operations on the 15th of August, 2010 with the
              goal of breaking all barriers that traders and investors face in
              India in terms of cost, support, and technology. We named the
              company Zerodha, a combination of Zero and "Rodha", the Sanskrit
              word for barrier.
            </p>
            <p
              style={{
                color: "#424242",
                font: "16px",
                margin: "16px 0px 15px",
              }}
            >
              Today, our disruptive pricing models and in-house technology have
              made us the biggest stock broker in India.
            </p>
            <p
              style={{
                color: "#424242",
                font: "16px",
                margin: "16px 0px 15px",
              }}
            >
              Over 1.6+ crore clients place billions of orders every year
              through our powerful ecosystem of investment platforms,
              contributing over 15% of all Indian retail trading volumes.
            </p>
          </div>
          <div className="col-6">
            <p
              style={{
                color: "#424242",
                font: "16px",
                margin: "16px 0px 15px",
              }}
            >
              In addition, we run a number of popular open online educational
              and community initiatives to empower retail traders and investors.
            </p>
            <p
              style={{
                color: "#424242",
                font: "16px",
                margin: "16px 0px 15px",
              }}
            >
              <a href="" style={{ textDecoration: "none" }}>
                Rainmatter
              </a>
              , our fintech fund and incubator, has invested in several fintech
              startups with the goal of growing the Indian capital markets.
            </p>
            <p
              style={{
                color: "#424242",
                font: "16px",
                margin: "16px 0px 15px",
              }}
            >
              And yet, we are always up to something new every day. Catch up on
              the latest updates on our{" "}
              <a href="" style={{ textDecoration: "none" }}>
                blog
              </a>{" "}
              or see what the media is{" "}
              <a href="" style={{ textDecoration: "none" }}>
                saying about us
              </a>{" "}
              or learn more about our business and product{" "}
              <a href="" style={{ textDecoration: "none" }}>
                philosophies
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
