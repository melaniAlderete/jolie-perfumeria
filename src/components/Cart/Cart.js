import "./Cart.css";
import Button from "react-bootstrap/Button";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();
  const { cart, clearCart, removeItem, getTotal } = useContext(CartContext);
  let total = getTotal();

  return (
    <div className="cartPage">
      {cart.length === 0 ? (
        <>
          <div className="center">
            <h2>El carrito está vacío</h2>
            <Link to="/">
              <h4 className="btnRed">Seguir comprando</h4>
            </Link>
          </div>
        </>
      ) : (
        <>
          {cart.map((prod) => (
            <div className="checkoutProduct" key={prod.id}>
              <div className="imgContainer">
                <img src={prod.image} alt="image of a product" />
              </div>
              <div>Producto: {prod.model}</div>
              <div>Cantidad: {prod.quantity}</div>
              <div>Precio: ${prod.price}</div>
              <div>Subtotal: ${prod.price * prod.quantity}</div>
              <div>
                <Button type="button" className="delete" variant="btn btn-outline-danger" onClick={() => removeItem(prod.id)}>
                  <i class="bi bi-x-lg"></i>
                </Button>
              </div>
            </div>
          ))}
          <h2 className="totalCart">Total ${total}</h2>
          <div className="cartButtons">
            <a className="btnRed" onClick={clearCart}>
              Vaciar carrito <i class="bi bi-bag-x-fill"></i>
            </a>
            <Button
              onClick={() => {
                navigate("/checkout");
              }}
              variant="purple"
            >
              Finalizar compra <i class="bi bi-suit-heart"></i>
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
export default Cart;
