import React from "react";
import { useState } from "react";

function SearchBar(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");

  const searchButtonPressed = () => {
    console.log([name, price, type, brand]);
    props.updateSearchParams({
      name: name,
      price: price,
      type: type,
      brand: brand,
    });
  };

  return (
    <div className="container">
      <div className="row">
        <h2>SEARCH</h2>
      </div>

      <div className="row">
        <div className="col">
          <label htmlFor="name-feild">Name: </label>
          <input
            id="search-name-field"
            type="text"
            className="form-control"
            // autoComplete="off"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
        </div>

        <div className="col">
          <label htmlFor="price-feild">Max Price: </label>
          <input
            id="search-price-field"
            type="number"
            value={price}
            className="form-control"
            onChange={(e) => {
              setPrice(Number(e.target.value));
            }}
          ></input>
        </div>

        <div className="col">
          <label htmlFor="type-feild">Type: </label>
          <input
            id="search-type-field"
            type="text"
            className="form-control"
            value={type}
            onChange={(e) => {
              setType(e.target.value);
            }}
          ></input>
        </div>

        <div className="col">
          <label htmlFor="brand-feild">Brand: </label>
          <input
            id="search-brand-field"
            type="text"
            className="form-control"
            value={brand}
            onChange={(e) => {
              setBrand(e.target.value);
            }}
          ></input>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-4" />
        <button
          type="button"
          className="col-4 btn btn-primary"
          onClick={searchButtonPressed}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
