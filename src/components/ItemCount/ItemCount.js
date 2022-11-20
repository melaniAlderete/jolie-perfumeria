import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import "./ItemCount.css";

function Counter({ stock, onAdd}) {
  const [count, setCount] = useState(1);

  const add = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const substract = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <div className="counter">
        <button type="button" class="btn btn-light" onClick={substract}>
          <i class="bi bi-dash-lg"></i>
        </button>
        <p>{count}</p>
        <button type="button" class="btn btn-light" onClick={add}>
          <i class="bi bi-plus-lg"></i>
        </button>
      </div>
      <div>
        <Button
          onClick={() => onAdd(count)}
          className="counter__addToCart"
          variant="purple"
        >
          Agregar al carrito <i class="bi bi-bag-plus-fill"></i>
        </Button>
      </div>
    </div>
  );
}

export default Counter;
