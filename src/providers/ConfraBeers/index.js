import { createContext, useContext, useState } from "react";

const ConfraBeersContext = createContext();

export const ConfraBeersProvider = ({ children }) => {
  const [confraBeers, setConfraBeers] = useState([]);

  return (
    <ConfraBeersContext.Provider value={{ confraBeers, setConfraBeers }}>
      {children}
    </ConfraBeersContext.Provider>
  );
};

export const useConfraBeers = () => useContext(ConfraBeersContext);
