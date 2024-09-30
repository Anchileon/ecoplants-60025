import React, { useContext, useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  query,
  where,
  getFirestore,
} from "firebase/firestore";
import ClipLoader from "react-spinners/ClipLoader";
import "./style.css";
import CartContext from "../../context/CartContext/CartContexton";

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { sumar, restar } = useContext(CartContext);


  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "items");

    // Cambia "categoryId" por "category" en la consulta
    const q = categoryId
      ? query(itemsCollection, where("category", "==", categoryId))
      : itemsCollection;

    getDocs(q)
      .then((snapshot) => {
        const itemsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setItems(itemsData);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [categoryId]);

  if (loading) {
    return (
      <div className="loader-container">
        <ClipLoader size={100} color={"rgb(81, 178, 81)"} loading={loading} />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container">
      <div className="card-container">
        <ItemList items={items} />
      </div>
    </div>
  );
};

export default ItemListContainer;
