import React from "react";
import styled from "styled-components";

const Layout = ({ children }) => {
  return <StLayout>{children}</StLayout>;
};

export default Layout;

const StLayout = styled.div`
  margin: 0 auto;
  width: 1200px;
  /* max-width: 1200px;
  min-width: 800px;
  min-height: 100vh; */

  /* background-image: linear-gradient(
    to bottom,
    #e1ffed,
    #defeed,
    #dafded,
    #d7fced,
    #d3fbed
  ); */
`;
