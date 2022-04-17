import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./layouts/Layout";
import { userContext } from "./context/UserContex";
import { getSuggestedUsers } from "./services/APIServices";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import SecondaryLayout from "./layouts/SecondaryLayout";
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
        <Routes>
          <Route path="/">
            <Route
              index
              element={
                <Layout>
                  <Home />
                </Layout>
              }
            />
            <Route
              path=":username"
              element={
                <SecondaryLayout>
                  <Profile />
                </SecondaryLayout>
              }
            />
          </Route>
          <Route
            path="/following"
            element={
              <Layout>
                <> following </>
              </Layout>
            }
          />
          <Route
            path="/live"
            element={
              <SecondaryLayout>
                <> Live </>
              </SecondaryLayout>
            }
          />
          <Route path="*" element={<p> Noth found</p>} />
        </Routes>
      </userContext.Provider>
    </BrowserRouter>
  );
};

export default App;
