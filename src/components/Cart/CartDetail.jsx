// import React, { useState } from "react";
// import "./style.css";
// import Form from "../Form/Form";
// import CartItem from "../CartItem/CartItem";

// const CartDetail = () => {
//   const [buyer, setBuyer] = useState({
//     name: "",
//     email: "",
//     address: "",
//   });
//   const [error, setError] = useState({});

//   const handleChange = (e) => {
//     setBuyer({ ...buyer, [e.target.name]: e.target.value });
//   };

//   const cart = [
//     {
//       id: 1,
//       name: "Product 1",
//       price: 10.99,
//       quantity: 2,
//     },
//   ];

//   const submit = (e) => {
//     e.preventDefault();
//     const localError = {};

//     if (!buyer.name) {
//       localError.name = "Por favor ingrese el nombre";
//     }
//     if (!buyer.email) {
//       localError.email = "Por favor ingrese el correo electrónico";
//     }
//     if (!buyer.address) {
//       localError.address = "Por favor ingrese la dirección";
//     }

//     setError(localError);
//   };

//   return (
//     <div>
//       <h2>Carrito de Compras</h2>
//       {cart.map((item) => (
//         <CartItem key={item.id} item={item} />
//       ))}
//       <Form
//         buyer={buyer}
//         error={error}
//         handleChange={handleChange}
//         submit={submit}
//       />
//     </div>
//   );
// };

// export default CartDetail;
