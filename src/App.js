import React, { Component } from "react";
import "./App.css";
import { useState } from "react";
import SearchBar from "./SearchBar";
import AddItem from "./AddItem";
import ItemsDisplay from "./ItemsDisplay";

function App() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState({ items: [] });

  const updateFilters = (searchParams) => {
    setFilters(searchParams);
  };

  const addItemToData = (item) => {
    let items = data["items"];
    items.push(item);
    setData({ items: items });
    console.log(data);
  };

  return (
    <div className="container">
      <div className="row mt-3">
        <SearchBar updateSearchParams={updateFilters} />
      </div>
      <div className="row mt-3">
        <AddItem addItem={addItemToData} />
      </div>
      <div className="row mt-3">
        <ItemsDisplay items={data["items"]} />
      </div>
    </div>
  );
}

export default App;
