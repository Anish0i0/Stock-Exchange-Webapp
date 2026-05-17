import React, { useState } from "react";

import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/login`,
        {
          email,
          password,
        },
        {
          withCredentials: true,
        },
      );

      if (data.success) {
        window.location.href = import.meta.env.VITE_DASHBOARD_URL;
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.log(err);

      alert("Something went wrong");
    }
  };

  return (
    <div className="container mt-5">
      <div
        className="card p-4 shadow"
        style={{
          maxWidth: "400px",
          margin: "auto",
          borderRadius: "15px",
        }}
      >
        <h2 className="text-center mb-4">Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email</label>

            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>

            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
