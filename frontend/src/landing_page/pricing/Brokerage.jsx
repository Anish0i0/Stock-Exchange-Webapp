import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 style={{ textAlign: "center" }}>Brokerage calculator</h3>
            <ul style={{ color: "black" }}>
              <li>
                Tax levied by the government on the services rendered. 18% of (
                brokerage + SEBI charges<br></br> + transaction charges)
              </li>
              <li>
                Charged at ₹10 per crore + GST by Securities and Exchange Board
                of India for regulating<br></br> the markets.
              </li>
              <li>
                ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST)
                is charged on the trading<br></br> account ledger when stocks
                are sold, irrespective of quantity.
              </li>
              <li>
                Debit transactions of mutual funds & bonds get an additional
                discount of<br></br> ₹0.25 on the CDSL fee.
              </li>
              <li>₹30 + GST per pledge request per ISIN.</li>
              <li>
                ₹20 plus GST will be charged for OFS / buyback / takeover /
                delisting<br></br> orders placed through Console.
              </li>
              <li>₹25 per transaction.</li>
            </ul>
          </a>
        </div>
        <div className="col-4">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 style={{ textAlign: "center" }}>List of charges</h3>
            <ul style={{ color: "black" }}>
              <li>
                Tax levied by the government on the services rendered. 18% of (
                brokerage + SEBI charges + transaction charges)
              </li>
              <li>
                {" "}
                Charged at ₹10 per crore + GST by Securities and Exchange Board
                of India for regulating the markets.
              </li>
              <li>
                {" "}
                ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST)
                is charged on the trading account ledger when stocks are sold,
                irrespective of quantity.
              </li>
              <li>
                {" "}
                Debit transactions of mutual funds & bonds get an additional
                discount of ₹0.25 on the CDSL fee.
              </li>
              <li> ₹30 + GST per pledge request per ISIN.</li>
              <li>
                {" "}
                ₹20 plus GST will be charged for OFS / buyback / takeover /
                delisting orders placed through Console.
              </li>
              <li> ₹25 per transaction.</li>
            </ul>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
