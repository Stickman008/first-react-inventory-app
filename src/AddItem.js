import React from "react";
import { useState } from "react";

function AddItem(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");

  const addItemButtonPressed = () => {
    console.log([name, price, type, brand]);
    props.addItem({ name: name, price: price, type: type, brand: brand });
    setName("");
    setPrice(0);
    setType("");
    setBrand("");
  };

  return (
    <div className="container">
      <div className="row">
        <h2>ADD ITEM</h2>
      </div>

      <div className="row">
        <div className="col">
          <label htmlFor="name-feild">Name: </label>
          <input
            id="name-field"
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
        </div>

        <div className="col">
          <label htmlFor="price-feild">Price: </label>
          <input
            id="price-field"
            type="number"
            className="form-control"
            value={price}
            onChange={(e) => {
              setPrice(Number(e.target.value));
            }}
          ></input>
        </div>

        <div className="col">
          <label htmlFor="type-feild">Type: </label>
          <input
            id="type-field"
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
            id="brand-field"
            type="text"
            className="form-control"
            value={brand}
            onChange={(e) => {
              setBrand(e.target.value);
            }}
          ></input>
        </div>

        <div className="row mt-3">
          <div className="col-4" />
          <button
            type="button"
            className="col-4 btn btn-dark"
            onClick={addItemButtonPressed}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddItem;
