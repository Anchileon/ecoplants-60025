import React from "react";
import Counter from "../Counter/Counter";
const ItemDetail = ({ item }) => {
  if (!item) {
    return <p>Item no disponible.</p>;
  }
  return (
    <>
      <img src={item.img} alt={item.name} />
      <div>
        <p>Name: {item.name}</p>
        <p>Category: {item.category}</p>
        <p>Price: ${item.price}</p>
        <Counter
          onAdd={(q) => {
            console.log("agregar", q);
          }}
        />
      </div>
    </>
  );
};

export default ItemDetail;
