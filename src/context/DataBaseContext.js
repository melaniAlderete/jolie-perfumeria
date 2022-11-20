import { initializeApp } from "firebase/app";
import { useContext } from "react";
import { createContext } from "react";
import firebaseConfig from "../FireBaseConfig";
import { child, get, getDatabase, ref, set } from "firebase/database";



export const DataBaseContext = createContext();

export const useDataBase = () => {
  const context = useContext(DataBaseContext);
  return context;
};

export const insertOrder = async (orderId, buyerData, orderData) => {

  const dB = getDatabase();

console.log(buyerData.name)
  await set(ref(dB, "orders/" + orderId), {
    orderId: orderId,
    email: buyerData.email,
    name: buyerData.name,
    tel: buyerData.tel,
    orderData: orderData,
  });
};

export const DataBaseProvider = ({ children }) => {

  const app = initializeApp(firebaseConfig);
  const db = getDatabase();

  const getProducts = async () => {
    const dbRef = ref(db);
    let values = null;
    await get(child(dbRef, "products/")).then((snapshot) => {
      if (snapshot.exists()) {
        values = Object.values(snapshot.val());
      }
    });
    return values;
  };

  return (
    <DataBaseContext.Provider value={{ getProducts }}>
      {children}
    </DataBaseContext.Provider>
  );
};
