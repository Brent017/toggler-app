import React from "react";
import Menu from "./Menu";
import Favorite from "./Favorite";
import Button from "./Button";
import Header from "./Header";

function App() {
  return (
    <div>
      <Menu />
      <hr />
      <Favorite />
      <hr />
      <Header />
      <Button />
    </div>
  );
}

export default App;
