import React from "react";
import Toggler from "./Toggler";

function Menu(props) {
  return (
    <Toggler
      render={(on, toggle) => (
        <div>
          <button onClick={toggle}>{on ? "Hide" : "Show"} Menu</button>
          <nav style={{ display: on ? "block" : "none" }}>
            <h5>Signed in as Brent017</h5>
            <a>Your Profile</a>
            <br />
            <a>Your Repositories</a>
            <br />
            <a>Your Stars</a>
          </nav>
        </div>
      )}
    />
  );
}

export default Menu;
