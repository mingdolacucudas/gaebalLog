import React from "react";
import GlobalStyle from "./shared/GlobalStyle";
import Router from "./shared/Router";
import styled from "styled-components";

const Title = styled.div`
  color: ${(props) => props.theme.textColor};
`;

const Wrapper = styled.div`
  display: block;
  /* height: 1200px;
  width: 800px;
  justify-content: center;
  align-items: center; */
  background-color: ${(props) => props.theme.backgroundColor};
`;

function App() {
  return (
    <>
      <Wrapper>
        <Title>
          <GlobalStyle />
          <Router />
        </Title>
      </Wrapper>
    </>
  );
}

export default App;
