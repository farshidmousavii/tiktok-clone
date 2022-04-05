import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import { userContext } from "./context/UserContex";
import { getSuggestedUsers } from "./services/APIServices";
const App = () => {
  const [users, setUsers] = useState(null);

  const getUsers = async () => {
    try {
      const { data } = await getSuggestedUsers();
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
