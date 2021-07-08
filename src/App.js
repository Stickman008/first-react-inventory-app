import React, { Component } from "react";
import "./App.css";
import { useState } from "react";
import SearchBar from "./SearchBar";
import AddItem from "./AddItem";

function App() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState({ items: [] });

  const updateFilters = (searchParams) => {
    setFilters(searchParams);
  };

  const addItemToData = (item) => {
    let items = data["items"];
    items.push(item);
    setData({items: items});
    console.log(data);
  };

  return (
    <div className="App">
      <SearchBar updateSearchParams={updateFilters} />
      <AddItem addItem={addItemToData} />
      {/* <p>Name: {"name" in filters ? filters["name"] : "No Data"}</p>
      <p>Max Price: {"price" in filters ? filters["price"] : "No Data"}</p>
      <p>Type: {"type" in filters ? filters["type"] : "No Data"}</p>
      <p>Brand: {"brand" in filters ? filters["brand"] : "No Data"}</p> */}
    </div>
  );
}

export default App;
