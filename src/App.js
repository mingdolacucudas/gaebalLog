import React from "react";
import Router from "./shared/Router";

import Post from "./components/pages/Post";

function App() {
  return (
    <div>
      <Router />
      <Post></Post>
    </div>
  );
}

export default App;
