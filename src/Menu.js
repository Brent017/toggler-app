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
        <button onClick={this.toggleShow}>
          {this.state.show ? "Hide" : "Show"} Menu
        </button>
        <nav style={{ display: this.state.show ? "block" : "none" }}>
          <h5>Signed in as Brent017</h5>
          <a>Your Profile</a>
          <br />
          <a>Your Repositories</a>
          <br />
          <a>Your Stars</a>
        </nav>
      </div>
    );
  }
}

export default Menu;
