import CartContext from "./CartContexton";

const CartContextProvider = ({ children }) => {
  const sumar = (num1, num2) => num1 + num2;
  const restar = (num1, num2) => num1 - num2;

  const values = {
    sumar,
    restar,
  };
  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};
export default CartContextProvider;
