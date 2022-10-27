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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Navigate replace to="/productos" />} />
      <Route path="/productos" element={<ItemListContainer category="all"/>} />
      <Route path="/productos/fragancias" element={<ItemListContainer category="Fragancias"/>} />
      <Route path="/productos/makeup" element={<ItemListContainer category="MakeUp"/>} />
      <Route path="/productos/capilar" element={<ItemListContainer category="Capilar"/>} />
      <Route path="/productos/:model/:key" element={<ItemDetailContainer/>}/>
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
