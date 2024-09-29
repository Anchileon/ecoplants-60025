import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <div key={item.id} className="card">
      <img className="item-image" src={item.img} alt={item.name} />
      <p>Name: {item.name}</p>
      <p>Category: {item.category}</p>
      <p>Price: ${item.price}</p>

      <Link className="button" to={`/detail/${item.id}`}>
        Ver Detalle
      </Link>
    </div>
  );
};

export default Item;
