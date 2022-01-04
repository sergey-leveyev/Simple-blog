import React from "react";
import Postcreate from "./PostCreate";
import Postlist from "./PostList";

const App = () => {
  return (
    <div className="container">
      <h1>Create a Post</h1>
      <Postcreate />
      <hr />
      <h1>Posts</h1>
      <Postlist />
    </div>
  );
};

export default App;
