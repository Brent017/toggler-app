import React from "react";
import Menu from "./Menu";
import Favorite from "./Favorite";
import Button from "./Button";
import Header from "./Header";
import styles from "./styles.css";

function App(props) {
  return (
    <div className="{props.theme}-theme">
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
