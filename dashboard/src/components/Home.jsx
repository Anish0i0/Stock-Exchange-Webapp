import React, { useEffect } from "react";

import axios from "axios";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  useEffect(() => {
    console.log("API URL:", import.meta.env.VITE_API_URL);

    axios
      .post(
        `${import.meta.env.VITE_API_URL}/`,
        {},
        {
          withCredentials: true,
        },
      )
      .then((res) => {
        console.log("VERIFY RESPONSE:", res.data);

        if (!res.data.status) {
          window.location.href = `${import.meta.env.VITE_FRONTEND_URL}/login`;
        }
      })
      .catch((err) => {
        console.log("VERIFY ERROR:", err);

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
