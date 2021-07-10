import React, { Component } from "react";

function ItemsDisplay(props) {
  const showItem = (item, idx) => {
    return (
      <tr>
        <th scope="row">{idx}</th>
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td>{item.type}</td>
        <td>{item.brand}</td>
      </tr>
    );
  };

  return (
    <div className="container">
      <div className="row">
        <h2>Items</h2>
      </div>
      <div className="row">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Type</th>
              <th scope="col">Brand</th>
            </tr>
          </thead>
          <tbody>
            {props.items.length !== 0 ? (
              props.items.map(showItem)
            ) : (
              <div className="row">
                <h1 className="text-danger">NOT FOUND</h1>
              </div>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ItemsDisplay;
