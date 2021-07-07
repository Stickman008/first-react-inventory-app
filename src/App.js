import React, { Component }  from 'react';
import './App.css';
import Info from "./Info.js";

function App() {
  return (
    <div className="App">
      <Info />
      <AddItem />
      <AddItem />
      <AddItem />
    </div>
  );
}

function AddItem() {
  const value = "this is default value";

  return (
    <form>
      <lable for="text-form">Type something: </lable>
      <input type="text" value={value} id="text-form"></input>
    </form>
  );
}

export default App;
