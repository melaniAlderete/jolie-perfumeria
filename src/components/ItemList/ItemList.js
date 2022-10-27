import Item from "./Item/Item";
import "./ItemList.css";
import Products from "../Const/Products";
import Spinner from "../Spinner/Spinner";
import { useEffect, useState } from "react";

function ItemList({ category }) {
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSpinner(false);
    }, 2000);
  },[]);

  const allProducts = Products.map((product) => <Item product={product} />);

  const filterProducts = Products.filter(
    (product) => product.category === category
  ).map((product) => <Item product={product} />);

  return (
    <div className="itemList">
      {showSpinner&&<Spinner/>}
      {!showSpinner&&(category === "all" ? allProducts : filterProducts)}
    </div>
  );
}
export default ItemList;
