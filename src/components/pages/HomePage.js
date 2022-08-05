import React from "react";
import Layout from "../templates/Layout";
import Header from "../templates/Header";
import LogList from "../../UI/organisms/LogList";

const HomePage = () => {
  return (
    // 홈페이지 - 호진님
    <Layout>
      <Header />
      <LogList />
    </Layout>
  );
};

export default HomePage;
