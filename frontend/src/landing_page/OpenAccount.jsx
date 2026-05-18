import React from "react";
import { useNavigate } from "react-router-dom";

function OpenAccount() {
  const navigate = useNavigate();

  return (
    <div className="container p-5">
      <div className="row text-center">
        <h1 className="mt-5">Open Stocky Account</h1>
        <p>
          Modern platforms and apps, 0rs insvestments, and flat 20rs intraday
          and F&O trades.
        </p>
        <button
          className="p-3 btn btn-primary fs-5 mb-5"
          style={{ width: "30%", margin: "0 auto" }}
          onClick={() => navigate("/signup")}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
