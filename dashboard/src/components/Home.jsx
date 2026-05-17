import React, { useEffect } from "react";

import axios from "axios";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  useEffect(() => {
    axios
      .post(
        `${import.meta.env.VITE_API_URL}`,
        {},
        {
          withCredentials: true,
        },
      )
      .then((res) => {
        if (!res.data.status) {
          window.location.href = `${import.meta.env.VITE_FRONTEND_URL}/login`;
        }
      })
      .catch((err) => {
        console.log(err);

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
