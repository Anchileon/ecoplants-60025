import React, { useContext, useState } from "react";
import "./style.css";
import Form from "../Form/Form";

const CartDetail = () => {
  const [buyer, setBuyer] = useState({
    name: "",
    email: "",
  });
  const [error, setError] = useState({
    name: "",
    email: "",
  });
  const handleChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };
  const cart = [
    {
      id: 1,
      name: "Product 1",
      price: 10.99,
      img: "https://res.cloudinary.com/dxhhtvhwd/image/upload/v1727219598/kalanchoe_jmttlz.jpg",
    },
  ];

  const submit = (e) => {
    e.preventDefault();
    const localError = {};
    if (!buyer.name) {
      localError.name = "Ingrese el nomre";
    }
    if (!buyer.email) {
      localError.email = "Ingrese el email";
    }
    if (Object.keys(localError).length === 0) {
      console.log("creamos la orden");
    } else {
      setError(localError);
    }
  };
  return (
    <div className="cart-container">
      {cart.map((el) => (
        <div key={el.id}>
          <div>
            <p>producto: {el.name}</p>
            <p>Precio: {el.price}</p>
            <p>cantidad {el.quantity}</p>
          </div>
          <img src={el.img} className="cart-image" alt={el.name} />
          <button onClick={() => removeItem(el.id)} className="remove">
            Eliminar
          </button>
        </div>
      ))}
      <Form
        handleChange={handleChange}
        submit={submit}
        formData={buyer}
        error={error}
      />
    </div>
  );
};

export default CartDetail;
