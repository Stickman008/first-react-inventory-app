import React, { Component } from "react";

function ItemsDisplay(props) {
  const showItem = (item, idx) => {
    return (
      <div>
        <p>ID: {idx}</p>
        <p>Name: {item.name}</p>
        <p>Price: {item.price}</p>
        <p>Type: {item.type}</p>
        <p>Brand: {item.brand}</p>
      </div>
    );
  };

  return <div>{props.items.map(showItem)}</div>;
}

export default ItemsDisplay;
