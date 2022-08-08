import React from "react";

import Layout from "../templates/Layout";
import Header from "../templates/Header";
import SingleLog from "../../UI/organisms/SingleLog";
import Comment from "../../UI/molecules/Comment";

const DetailPage = () => {
  return (
    <Layout>
      <Header />
      <SingleLog />
      <Comment />
    </Layout>
  );
};

export default DetailPage;
