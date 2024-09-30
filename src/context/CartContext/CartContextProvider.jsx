import { useState } from "react";
import CartContext from "./CartContexton";

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Función para agregar un artículo al carrito
  const addItem = (item, quantity) => {
    // Verifica si el artículo ya existe en el carrito
    const existingItem = cart.find(el => el.id === item.id);
    
    if (existingItem) {
      // Si existe, actualiza la cantidad
      setCart(cart.map(el =>
        el.id === item.id ? { ...el, quantity: el.quantity + quantity } : el
      ));
    } else {
      // Si no existe, lo agrega al carrito
      setCart([...cart, { ...item, quantity }]);
    }
  };

  // Función para eliminar un artículo del carrito
  const removeItem = (id) => {
    setCart(cart.filter(el => el.id !== id));
  };

  // Función para limpiar el carrito
  const clear = () => {
    setCart([]);
  };

  // Función para obtener el total del carrito
  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Los valores que se pasarán a los componentes que consumen este contexto
  const values = {
    cart,
    addItem,
    removeItem,
    clear,
    getTotal,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
