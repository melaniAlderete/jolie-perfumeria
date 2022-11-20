import Item from "./Item/Item";
import "./ItemList.css";
import Spinner from "../Spinner/Spinner";
import { useEffect, useState } from "react";
import { useDataBase } from "../../context/DataBaseContext";

function ItemList({ category }) {
  const [showSpinner, setShowSpinner] = useState(true);

  const [allProducts, setAllProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);

  const { getProducts } = useDataBase();

  useEffect(() => {
    const getAllProducts = async () => {
      await getProducts()
        .then((Products) => {
          setAllProducts(Products.map((product) => <Item product={product} />));

          setFilterProducts(
            Products.filter((product) => product.category === category).map(
              (product) => <Item product={product} />
            )
          );
        })
        .finally(
          setTimeout(() => {
            setShowSpinner(false);
          }, 500)
        );
    };

    getAllProducts();
  }, [category]);

  return (
    <div className="itemList">
      {showSpinner && <Spinner />}
      {!showSpinner && (category === "all" ? allProducts : filterProducts)}
    </div>
  );
}
export default ItemList;
