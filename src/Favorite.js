import React, { Component } from "react";

class Favorite extends Component {
  state = {
    favorited: false
  };

  toggleFavorite = () => {
    this.setState(prevState => {
      return {
        favorited: !prevState.favorited
      };
    });
  };

  render() {
    return (
      <div>
        <h3>Click heart to favorite</h3>
        <h1>
          <span onClick={this.toggleFavorite}>
            {this.state.favorited ? "❤️" : "♡"}
          </span>
        </h1>
      </div>
    );
  }
}

export default Favorite;
