import "./App.css";
import Header from "./components/navbar/Header";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <ItemListContainer greeting={"Bienvenido!"} />
    </div>
  );
};

export default App;
