import { createContext, useContext, useState } from "react";

const PromBeersContext = createContext();

export const PromBeersProvider = ({ children }) => {
  const [promBeers, setPromBeers] = useState([]);

  return (
    <PromBeersContext.Provider value={{ promBeers, setPromBeers }}>
      {children}
    </PromBeersContext.Provider>
  );
};

export const usePromBeers = () => useContext(PromBeersContext);
