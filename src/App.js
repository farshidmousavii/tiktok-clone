import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/">{/* <Route index element={Home} /> */}</Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
