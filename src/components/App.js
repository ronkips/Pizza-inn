import { ThemeProvider } from "styled-components";
import React from "react";
import Layout from "./Layout";
import Home from "./Characters/Home";
import Spinner from "./Spinner";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Menu from "./Menu";

const App = () => {
  return (
    <>
      <Layout>
        {/* <Home /> */}
        {/* <Login /> */}
        {/* <Register /> */}
        <Menu />
      </Layout>
    </>
  );
};

export default App;
