import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc, getFirestore } from "firebase/firestore";
const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const db = getFirestore();
    const docRef = doc(db, "items", id);
  
    getDoc(docRef).then((snapshot) => {
      if (snapshot.exists()) {
        setItem({
          id: snapshot.id,
          ...snapshot.data(),
        });
      } else {
        console.error("Item no encontrado");
      }
    }).catch((err) => {
      console.error("Error al obtener el documento", err);
    });
  }, [id]);
  return <div className="item-detail">{<ItemDetail item={item} />}</div>;
};

export default ItemDetailContainer;
