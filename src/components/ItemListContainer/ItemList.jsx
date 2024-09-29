import React from "react";
import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((el) => (
        <Item key={el.id} item={el} /> 
      ))}
    </div>
  );
};

export default ItemList;
