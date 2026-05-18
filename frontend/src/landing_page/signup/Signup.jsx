import React, { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");

  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/signup`,
        {
          email,
          username,
          password,
        },
      );

      if (data.success) {
        window.location.href = `${import.meta.env.VITE_DASHBOARD_URL}?token=${data.token}`;
      } else {
        setError(data.message);
      }
    } catch (err) {
      console.log(err);

      setError("Something went wrong");
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
        <h2 className="text-center mb-4">Signup</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Username</label>

            <input
              type="text"
              className="form-control"
              placeholder="Enter username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

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

          {error && (
            <p
              style={{
                color: "red",
                fontSize: "14px",
                marginBottom: "10px",
              }}
            >
              {error}
            </p>
          )}

          <button type="submit" className="btn btn-primary w-100">
            Signup
          </button>
        </form>

        <p className="text-center mt-3">
          Already have an account?{" "}
          <a
            href="#"
            onClick={() => navigate("/login")}
            style={{ cursor: "pointer" }}
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
