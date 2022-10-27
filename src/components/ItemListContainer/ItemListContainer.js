import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting, category}) => {
  return (
    <>
      <h1>{greeting}</h1>
      <div className="itemListContainer">
        <ItemList category={category}/>
      </div>
    </>
  );
};

export default ItemListContainer;
