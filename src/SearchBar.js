import React, { Component } from "react";
import { useState } from "react";

function SearchBar(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");

  const searchButtonPressed = () => {
    console.log([name, price, type, brand]);
    props.callback({ name: name, price: price, type: type, brand: brand });
  };

  return (
    <div>
      <h2>SEARCH</h2>
      <form autocomplete="off">
        <label htmlFor="name-feild">Name: </label>
        <input
          id="name-field"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>

        <label htmlFor="price-feild">Max Price: </label>
        <input
          id="price-field"
          type="number"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        ></input>

        <label htmlFor="type-feild">Type: </label>
        <input
          id="type-field"
          type="text"
          value={type}
          onChange={(e) => {
            setType(e.target.value);
          }}
        ></input>

        <label htmlFor="brand-feild">Brand: </label>
        <input
          id="brand-field"
          type="text"
          value={brand}
          onChange={(e) => {
            setBrand(e.target.value);
          }}
        ></input>

        <button type="button" onClick={searchButtonPressed}>
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;