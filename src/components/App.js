import React from "react";
import Layout from "./Layout";
import Home from "./Characters/Home";
import Spinner from "./Spinner";
import Login from "./Auth/Login";
import Register from "./Auth/Register";

const App = () => {
  return (
    <>
      <Layout>
        {/* <Home /> */}
        {/* <Login /> */}
        <Register />
      </Layout>
    </>
  );
};

export default App;
