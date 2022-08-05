import React from "react";
import Layout from "./Layout";
import Main from "./Main";
import Record from "./Record";
import Commit from "./Commit";
import Info from "./Info";
const Home = () => {
  return (
    <div>
      <h4>Home</h4>
      <Layout>
        <Main />
        <Record />
        <Commit />
        <Info />
      </Layout>
    </div>
  );
};

export default Home;
