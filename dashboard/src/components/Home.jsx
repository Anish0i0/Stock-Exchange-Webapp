import React, { useEffect } from "react";

import axios from "axios";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  useEffect(() => {
    const token = localStorage.getItem("token");

    console.log("TOKEN IN DASHBOARD:", token);

    if (!token) {
      console.log("NO TOKEN FOUND, REDIRECTING TO LOGIN");
      window.location.href = `${import.meta.env.VITE_FRONTEND_URL}/login`;
      return;
    }

    axios
      .post(
        `${import.meta.env.VITE_API_URL}/`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then((res) => {
        console.log("VERIFY RESPONSE:", res.data);

        if (!res.data.status) {
          localStorage.removeItem("token");
          window.location.href = `${import.meta.env.VITE_FRONTEND_URL}/login`;
        }
      })
      .catch((err) => {
        console.log("VERIFY ERROR:", err);

        localStorage.removeItem("token");
        window.location.href = `${import.meta.env.VITE_FRONTEND_URL}/login`;
      });
  }, []);

  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;
