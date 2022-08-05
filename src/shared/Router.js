import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "../components/pages/HomePage";
import PostPage from "../components/pages/PostPage";
import DetailPage from "../components/pages/DetailPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/post" element={<PostPage />} />
      <Route path="/detail" element={<DetailPage />} />
    </Routes>
  );
};

export default Router;
