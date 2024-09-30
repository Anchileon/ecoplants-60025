import React, { useContext, useState } from "react";
import "./style.css";
import Form from "../Form/Form";
import CartContext from "../../context/CartContext/CartContexton";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const CartDetail = () => {
  const { cart, removeItem, clear, getTotal } = useContext(CartContext);
  const [buyer, setBuyer] = useState({ name: "", email: "" });
  const [error, setError] = useState({ name: "", email: "" });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const addOrder = () => {
    const purchase = {
      buyer,
      items: cart,
      total: getTotal(),
      date: new Date(),
    };
    const db = getFirestore();
    const orderCollection = collection(db, "orders");
    addDoc(orderCollection, purchase)
      .then((res) => {
        console.log(`Order created with ID: ${res.id}`);
        setSuccessMessage("La compra fue procesada con éxito");
        clear(); // Limpia el carrito después de realizar la compra
        setBuyer({ name: "", email: "" }); // Resetea el formulario
      })
      .catch((err) => console.log(err));
  };

  const submit = (e) => {
    e.preventDefault();
    const localError = {};
    if (!buyer.name) {
      localError.name = "Ingrese el nombre";
    }
    if (!buyer.email) {
      localError.email = "Ingrese el email";
    }
    if (Object.keys(localError).length === 0) {
      addOrder(); // Llama a addOrder si no hay errores
    } else {
      setError(localError);
    }
  };

  return (
    <div className="container cart-container">
      {cart.map((el) => (
        <div key={el.id} className="row align-items-center mb-3">
          <div className="col-md-6">
            <p><strong>Producto:</strong> {el.name}</p>
            <p><strong>Precio:</strong> {el.price}</p>
            <p><strong>Cantidad:</strong> {el.quantity}</p>
          </div>
          <div className="col-md-3 text-center">
            <img src={el.img} className="cart-image img-fluid" alt={el.name} />
          </div>
          <div className="col-md-3 text-end">
            <button onClick={() => removeItem(el.id)} className="btn remove">
              Eliminar
            </button>
          </div>
        </div>
      ))}
      <div className="total">
        <h4>Total: ${getTotal()}</h4> {/* Mostrar el total aquí */}
      </div>
      <Form handleChange={handleChange} submit={submit} formData={buyer} error={error} />
      {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>}
    </div>
  );
};

export default CartDetail;
