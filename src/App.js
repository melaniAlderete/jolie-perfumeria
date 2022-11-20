import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { DataBaseProvider } from "./context/DataBaseContext";
import { ProductProvider } from "./context/ProductContext";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Navigate replace to="/productos" />} />
      <Route path="/productos" element={<ItemListContainer category="all" />} />
      <Route
        path="/productos/fragancias"
        element={<ItemListContainer category="Fragancias" />}
      />
      <Route
        path="/productos/makeup"
        element={<ItemListContainer category="MakeUp" />}
      />
      <Route
        path="/productos/capilar"
        element={<ItemListContainer category="Capilar" />}
      />
      <Route path="/productos/:model/:key" element={<ItemDetailContainer />} />
      <Route path="/carrito" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
    </Route>
  )
);

const App = () => {
  return (
    <DataBaseProvider>
      <ProductProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </ProductProvider>
    </DataBaseProvider>
  );
};

export default App;
