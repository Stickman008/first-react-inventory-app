import React, {Component} from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Info/>
      <AddItem/>
    </div>
  );
}

function Info() {
  const title = "This is title";
  const showTitle = true;

  if(showTitle) {
    return (
      <div>
        <h1>{title}</h1>
        <p>Manage</p>
      </div>
    )
  }

  return <p>NOTHING</p>
}

function AddItem() {
  return (
    <form>
      <lable for="text-form">Type something </lable>
      <input type="text" id="text-form"></input>
    </form>
  )
}

export default App;
