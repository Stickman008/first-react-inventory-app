import React, { Component } from "react";

class Info extends Component {
  render() {
    const title = "This is title";
    const showTitle = true;

    if (showTitle) {
      return (
        <div>
          <h1>{title}</h1>
          <p>Manage</p>
        </div>
      );
    }

    return <p>nothing</p>;
  }
}

export default Info;
