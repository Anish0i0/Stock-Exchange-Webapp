import React from "react";

function Hero() {
  return (
    <div
      className="container text-center border-bottom"
      style={{ padding: "100px 20px" }}
    >
      <h1>Charges</h1>
      <p className="landing-subheading color-grey">
        List of all charges and taxes
      </p>
      <div className="row mt-5 border-top">
        <div className="col">
          <img src="media\images\pricing0.svg" />
          <h2>Free equity delivery</h2>
          <p>
            All equity delivery investments (NSE,<br></br> BSE), are absolutely
            free — ₹ 0<br></br> brokerage.
          </p>
        </div>
        <div className="col">
          <img src="media\images\intradayTrades.svg" />
          <h2>Intraday and F&O trades</h2>
          <p>
            Flat ₹ 20 or 0.03% (whichever is<br></br> lower) per executed order
            on<br></br>
            intraday trades across equity,<br></br> currency, and commodity
            trades. Flat<br></br>
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col">
          <img src="media\images\pricingMF.svg" />
          <h2>Free direct MF</h2>
          <p>
            All direct mutual fund investments<br></br> are absolutely free — ₹
            0<br></br>
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
