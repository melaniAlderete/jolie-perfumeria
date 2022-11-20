import React from "react";
import Card from "react-bootstrap/Card";
import "./ItemDetailContainer.css";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import ItemCount from "../ItemCount/ItemCount";
import { useEffect, useState } from "react";
import { useDataBase } from "../../context/DataBaseContext";
import { useCart } from "../../context/CartContext";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const ItemDetailContainer = () => {
  const { key } = useParams();
  const [showSpinner, setShowSpinner] = useState(true);

  const [selectedProduct, setSelectedProduct] = useState([]);

  const { getProducts } = useDataBase();
  const { addItem } = useCart();

  useEffect(() => {
    const getAllProducts = async () => {
      await getProducts()
        .then((Products) => {
          setSelectedProduct(Products[key]);
        })
        .finally(
          setTimeout(() => {
            setShowSpinner(false);
          }, 500)
        );
    };

    getAllProducts();
  }, []);

  const handleOnAdd = (quantity) => {
    const productToAdd = { ...selectedProduct, quantity: quantity };
    addItem(productToAdd);
    selectedProduct.stock = selectedProduct.stock - quantity;
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-right',
      customClass: {
        popup: 'colored-toast'
      },
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true
    })
     Toast.fire({
      icon: 'success',
      title: 'Añadido al carrito',
      text: selectedProduct.model+' x'+quantity
    })
  };

  return (
    <div>
      {showSpinner && <Spinner />}
      {!showSpinner && (
        <div className="detailContainer">
          <Card
            style={{
              width: "52rem",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              marginLeft: "2rem",
              marginTop: "2rem",
            }}
          >
            <Card.Img variant="top" src={selectedProduct.image} />
            <Card.Body>
              <Card.Text>{selectedProduct.brand}</Card.Text>
              <Card.Title>{selectedProduct.model}</Card.Title>
              <Card.Text>{selectedProduct.description}</Card.Text>
              <Card.Text>${selectedProduct.price}</Card.Text>
            </Card.Body>
          </Card>
          <ItemCount stock={selectedProduct.stock} onAdd={handleOnAdd} />
        </div>
      )}
    </div>
  );
};

export default ItemDetailContainer;
