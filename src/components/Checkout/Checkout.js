import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { insertOrder } from "../../context/DataBaseContext";
import CartContext from "../../context/CartContext";
import "./Checkout.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";

const MySwal = withReactContent(Swal);

const Checkout = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [tel, setTel] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const refreshPage = () => {
    window.location.reload();
  };

  const { cart } = useContext(CartContext);
  const orderData = cart;

  const validateEmail = (email) => {
    const re = /\S+@\S+.\S+/;
    return re.test(email);
  };

  const onNameInputBlur = () => {
    if (name === "") {
      setErrors({ ...errors, name: "Campo obligatorio." });
    } else {
      let _errors = { ...errors };
      delete _errors.name;
      setErrors(_errors);
    }
  };

  const onEmailInputBlur = () => {
    if (email === "") {
      setErrors({ ...errors, email: "Campo obligatorio." });
    } else if (!validateEmail(email)) {
      setErrors({
        ...errors,
        email: "Debe ingresar un email valido",
      });
    } else {
      let _errors = { ...errors };
      delete _errors.email;
      setErrors(_errors);
    }
  };

  const onConfirmEmailInputBlur = () => {
    if (confirmEmail === "" || confirmEmail != email) {
      setErrors({ ...errors, confirmEmail: "Campo obligatorio." });
    } else if (!validateEmail(confirmEmail)) {
      setErrors({
        ...errors,
        confirmEmail: "Debe ingresar un email válido",
      });
    } else {
      let _errors = { ...errors };
      delete _errors.confirmEmail;
      setErrors(_errors);
    }
  };

  const onTelInputBlur = () => {
    if (tel === "") {
      setErrors({ ...errors, tel: "Campo obligatorio." });
    } else {
      let _errors = { ...errors };
      delete _errors.tel;
      setErrors(_errors);
    }
  };

  const sendButtonHandler = async () => {
    if (
      name === "" ||
      email === "" ||
      confirmEmail === "" ||
      tel === "" ||
      Object.keys(errors).length !== 0
    ) {
      MySwal.fire({
        icon: "error",
        title: "Oops...",
        text: "Hay errores en los campos!",
      });
    } else {
      const orderId = Math.random().toString(36).slice(2, 18);
      const buyerData = {
        name: name,
        email: email,
        tel: tel,
      };
      await insertOrder(orderId, buyerData, orderData);
      navigate("/");

      MySwal.fire({
        icon: "success",
        title: "Compra exitosa! su código de orden es: " + orderId,
      }).then((result) => {
        if (result.isConfirmed) {
          refreshPage();
        }
      });
    }
  };

  return (
    <div className="container px-5 my-5">
      <form id="contactForm">
        {errors.name && <div className="error">{errors.name}</div>}
        <div className="form-floating mb-3">
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            onBlur={onNameInputBlur}
            className="form-control"
            id="name"
            type="text"
            placeholder="Nombre y apellido"
            data-sb-validations="required"
          />
          <label htmlFor="nombreYApellido">Nombre y apellido</label>
        </div>
        {errors.email && <div className="error">{errors.email}</div>}
        <div className="form-floating mb-3">
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            onBlur={onEmailInputBlur}
            className="form-control"
            id="email"
            type="email"
            placeholder="Email "
            data-sb-validations="required,email"
          />
          <label htmlFor="email">Email </label>
        </div>
        {errors.confirmEmail && (
          <div className="error">{errors.confirmEmail}</div>
        )}
        <div className="form-floating mb-3">
          <input
            onChange={(e) => {
              setConfirmEmail(e.target.value);
            }}
            onBlur={onConfirmEmailInputBlur}
            className="form-control"
            id="confirmEmail"
            type="email"
            placeholder="Confirmar email"
            data-sb-validations="required,email"
          />
          <label htmlFor="confirmarEmail">Confirmar email</label>
        </div>
        {errors.tel && <div className="error">{errors.tel}</div>}
        <div className="form-floating mb-3">
          <input
            onChange={(e) => {
              setTel(e.target.value);
            }}
            onBlur={onTelInputBlur}
            className="form-control"
            id="tel"
            type="tel"
            placeholder="Teléfono"
            data-sb-validations="required"
          />
          <label htmlFor="telefono">Teléfono</label>
        </div>
        <div className="d-grid">
          <button
            onClick={sendButtonHandler}
            className="btn send btn-lg "
            id="submitButton"
            type="button"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
