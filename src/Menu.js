import React, { Component } from "react";

class Menu extends Component {
  state = {
    show: true
  };

  toggleShow = () => {
    this.setState(prevState => {
      return {
        show: !prevState.show
      };
    });
  };

  render() {
    return (
      <div>
        <button>Menu</button>
        <nav>
          <h5>Signed in as Brent017</h5>
          <a>Your Profile</a>
          <a>Your Repositories</a>
          <a>Your Stars</a>
        </nav>
      </div>
    );
  }
}

export default Menu;
