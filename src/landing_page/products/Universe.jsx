import React from "react";

function Universe({}) {
  return (
    <div className="container mt-5 mb-5">
      <div className="text-center">
        <h2>The Zerodha Universe</h2>
        <p className="center">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row mt-5">
        <div className="col">
          <div>
            <a
              href=""
              className="text-decoration-none text-dark"
              style={{ margin: "20px 0px 0px" }}
            >
              <img
                src="media\images\zerodhaFundhouse.png"
                style={{ width: "200px" }}
                alt="logo"
              />
              <br></br>
              <span>
                Our asset management venture<br></br> that is creating simple
                and transparent index<br></br> funds to help you save for your
                goals.
              </span>
            </a>
            <a
              href=""
              className="text-decoration-none text-dark"
              style={{ margin: "20px 0px 0px" }}
            >
              <img
                src="media\images\streakLogo.png"
                style={{ width: "200px" }}
                alt="logo"
              />
              <br></br>
              <span>
                Systematic trading platform<br></br> that allows you to create
                and backtest<br></br> strategies without coding.
              </span>
            </a>
          </div>
        </div>
        <div className="col">
          <div>
            <a
              href=""
              className="text-decoration-none text-dark"
              style={{ margin: "20px 0px 0px" }}
            >
              <img
                src="media\images\sensibullLogo.svg"
                style={{ width: "200px" }}
                alt="logo"
              />
              <br></br>
              <span>
                Options trading platform that lets you<br></br> create
                strategies, analyze positions, and examine<br></br> data points
                like open interest, FII/DII, and more.
              </span>
            </a>
            <a
              href=""
              className="text-decoration-none text-dark"
              style={{ margin: "20px 0px 0px" }}
            >
              <img
                src="media\images\smallcaseLogo.png"
                style={{ width: "200px" }}
                alt="logo"
              />
              <br></br>
              <span>
                Thematic investing platform<br></br> that helps you invest in
                diversified<br></br>
                baskets of stocks on ETFs.
              </span>
            </a>
          </div>
        </div>
        <div className="col">
          <div>
            <a
              href=""
              className="text-decoration-none text-dark"
              style={{ margin: "20px 0px 0px" }}
            >
              <img
                src="media\images\goldenpiLogo.png"
                style={{ width: "200px" }}
                alt="logo"
              />
              <br></br>
              <span>
                Investment research platform<br></br> that offers detailed
                insights on stocks,<br></br> sectors, supply chains, and more.
              </span>
            </a>
            <a
              href=""
              className="text-decoration-none text-dark"
              style={{ margin: "20px 0px 0px" }}
            >
              <img
                src="media\images\dittoLogo.png"
                style={{ width: "200px" }}
                alt="logo"
              />
              <br></br>
              <span>
                Personalized advice on life<br></br> and health insurance. No
                spam<br></br> and no mis-selling.
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Universe;
