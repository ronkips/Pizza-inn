import React from "react";
import Layout from "./Layout";
import Home from "./Characters/Home";
import Spinner from "./Spinner";
import Login from "./Auth/Login";

const App = () => {
  return (
    <>
      <Layout>
        {/* <Home /> */}
        <Login />
      </Layout>
    </>
  );
};

export default App;
