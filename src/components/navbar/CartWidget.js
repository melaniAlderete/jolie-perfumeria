import "./CartWidget.css";
import Badge from "react-bootstrap/Badge";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const CartWidget = () => {
  const navigate = useNavigate();
  const { getQuantity, cart} = useContext(CartContext);
  const quantity = getQuantity();

  return (
    <>
      <i
        className="bi bi-bag-heart"
        onClick={() => {
          navigate("/carrito");
        }}
      ></i>
      <Badge pill bg="dark">
        {quantity}
      </Badge>
    </>
  );
};

export default CartWidget;
