import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "../components/pages/Home";
import Commit from "../components/pages/Commit";
import Record from "../components/pages/Record";
import Info from "../components/pages/Info";

const Router = () => {
  return (
    <div>
      <h1>Router</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/commit" element={<Commit />} />
        <Route path="/record" element={<Record />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </div>
  );
};

export default Router;
