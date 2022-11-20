import { createContext, useContext } from "react";
import { useDataBase } from "./DataBaseContext";

export const ProductContext = createContext();

export const useProducts = () => {
  const context = useContext(ProductContext);
  return context;
};

export const ProductProvider = ({ children }) => {
  const { getProducts } = useDataBase();
  const ListProducts = async () => {
    return await getProducts();
  };
  const Products = ListProducts();

  return (
    <ProductContext.Provider value={{ Products }}>
      {children}
    </ProductContext.Provider>
  );
};
