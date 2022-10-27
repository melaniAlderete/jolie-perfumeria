import React from "react";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import Products from "../Const/Products";
import Spinner from "../Spinner/Spinner";
import { useEffect, useState } from "react";


const ItemDetailContainer = () => {
  const { key } = useParams();
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSpinner(false);
    }, 2000);
  }, []);

  return (
    <div>
      {showSpinner && <Spinner />}
      {!showSpinner && (
        <Card style={{ width: "52rem", display: "flex", flexDirection: "row", justifyContent: "center", marginLeft:"2rem", marginTop:"2rem"}}>
          <Card.Img variant="top" src={Products[key].image} />
          <Card.Body>
            <Card.Text>{Products[key].brand}</Card.Text>
            <Card.Title>{Products[key].model}</Card.Title>
            <Card.Text>{Products[key].description}</Card.Text>
            <Card.Text>${Products[key].price}</Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default ItemDetailContainer;
