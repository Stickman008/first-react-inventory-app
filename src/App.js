import React, { Component }  from 'react';
import './App.css';
import Info from "./Info.js";
import PropTypes from "prop-types";

function App() {
  return (
    <div className="App">
      <Info text="Inventory" />
      <AddItem text="test" />
      <AddItem text="test2" />
      <AddItem />
    </div>
  );
}

function AddItem(props) {
  const value = props.text;

  return (
    <form>
      <lable for="text-form">Type something: </lable>
      <input type="text" value={value} id="text-form"></input>
    </form>
  );
}

AddItem.defaultProps = {
  number: 1,
  text: "default text"
};

AddItem.propTypes = {
  number: PropTypes.number,
  text: PropTypes.string
};

export default App;
