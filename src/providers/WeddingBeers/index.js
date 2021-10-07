import { createContext, useContext, useState } from "react";

const WeddingBeersContext = createContext();

export const WeddingBeersProvider = ({ children }) => {
  const [weddingBeers, setWeddingBeers] = useState([]);

  return (
    <WeddingBeersContext.Provider value={{ weddingBeers, setWeddingBeers }}>
      {children}
    </WeddingBeersContext.Provider>
  );
};

export const useWeddingBeers = () => useContext(WeddingBeersContext);
