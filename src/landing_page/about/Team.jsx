import React from "react";

function Team() {
  return (
    <>
      <div className="container" style={{ padding: "80px 20px" }}>
        <div>
          <h2
            className="text-center"
            style={{ color: "#424242", font: "24px", margin: "0px 0px 20px" }}
          >
            People
          </h2>
          <div className="row">
            <div className="col-5 text-center">
              <img
                src="media\images\nithinKamath.jpg"
                className="rounded-circle img-fluid"
                style={{ width: "70%" }}
              />
              <h5 style={{ color: "#424242", font: "18px inter, serif" }}>
                Nithin Kamath
              </h5>
              <p className="text-grey">Founder, CEO</p>
            </div>
            <div className="col-7" style={{ color: "#424242", font: "16px" }}>
              <p
                style={{
                  color: "#424242",
                  font: "16px",
                  margin: "16px 0px 15px",
                }}
              >
                Nithin bootstrapped and founded Zerodha in 2010 to overcome the
                hurdles he faced during his decade long stint as a trader.
                Today, Zerodha has changed the landscape of the Indian broking
                industry.
              </p>
              <p
                style={{
                  color: "#424242",
                  font: "16px",
                  margin: "16px 0px 15px",
                }}
              >
                He is a member of the SEBI Secondary Market Advisory Committee
                (SMAC) and the Market Data Advisory Committee (MDAC).
              </p>
              <p
                style={{
                  color: "#424242",
                  font: "16px",
                  margin: "16px 0px 15px",
                }}
              >
                Playing basketball is his zen.
              </p>
              <p>
                Connect on{" "}
                <a href="" style={{ textDecoration: "none" }}>
                  Homepage
                </a>
                /{" "}
                <a href="" style={{ textDecoration: "none" }}>
                  TradingQnA
                </a>
                /{" "}
                <a href="" style={{ textDecoration: "none" }}>
                  Twitter
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
