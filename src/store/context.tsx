import { useLocalStore } from "mobx-react-lite";
import { createContext, useContext } from "react";
import { createStore, TStore } from "./store";

const StoreContext = createContext<TStore | null>(null);

export const DataStoreProvider = ({
  children,
}: {
  children: JSX.Element[] | JSX.Element;
}) => {
  const store = useLocalStore(createStore);

  return (
    <StoreContext.Provider value={store}>{children}. </StoreContext.Provider>
  );
};

export const useDataStore = () => {
  const store = useContext(StoreContext);

  if (!store) {
    throw new Error("useStore must be used within a StoreProvider.");
  }
  return store;
};
