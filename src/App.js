import React, { Component } from "react";
import "./App.css";
import { useState } from "react";
import SearchBar from "./SearchBar";
import PropTypes from "prop-types";

function App() {
  const [data, setData] = useState({});

  const updateData = (searchParams) => {
    setData(searchParams);
  };

  return (
    <div className="App">
      <SearchBar callback={updateData} />
      <br></br>
      <hr></hr>
      <p>Name: {"name" in data ? data["name"] : "No Data"}</p>
      <p>Max Price: {"price" in data ? data["price"] : "No Data"}</p>
      <p>Type: {"type" in data ? data["type"] : "No Data"}</p>
      <p>Brand: {"brand" in data ? data["brand"] : "No Data"}</p>
    </div>
  );
}

export default App;
