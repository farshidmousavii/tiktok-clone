import React, { useState, useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import { userContext } from "./context/UserContex";
import axios from "axios";
const App = () => {
  const [users, setUsers] = useState([]);

  const options = {
    method: "GET",
    url: "https://tiktok-all-in-one.p.rapidapi.com/user/recommend",
    params: { region: "US" },
    headers: {
      "X-RapidAPI-Host": "tiktok-all-in-one.p.rapidapi.com",
      "X-RapidAPI-Key": "b3c8716c5emsh2ec60c2feec9481p196e4fjsn71820c135371",
    },
  };

  const getUsers = async () => {
    try {
      const { data } = await axios.request(options);
      setUsers(data.user_list);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <BrowserRouter>
      <userContext.Provider value={users}>
        <Layout>
          <Routes>
            <Route path="/">{/* <Route index element={Home} /> */}</Route>
          </Routes>
        </Layout>
      </userContext.Provider>
    </BrowserRouter>
  );
};

export default App;
