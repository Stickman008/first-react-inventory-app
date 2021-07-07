import React, { Component } from "react";
import PropTypes from "prop-types";

class Info extends Component {

  constructor(props) {
      super(props);
  }

  render() {
    const showTitle = true;

    if (showTitle) {
      return (
        <div>
          <h1>{this.props.text}</h1>
          <p>Manage</p>
        </div>
      );
    }

    return <p>nothing</p>;
  }
}

Info.defaultProps = {
  title: "Default"
};

Info.propTypes = {
  title: PropTypes.string,
};

export default Info;
