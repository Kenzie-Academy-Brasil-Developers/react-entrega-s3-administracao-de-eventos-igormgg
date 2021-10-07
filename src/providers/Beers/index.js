import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const BeersContext = createContext();

export const BeersProvider = ({ children }) => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.punkapi.com/v2/beers/")
      .then((response) => setBeers(response.data));
  }, []);

  return (
    <BeersContext.Provider value={{ beers, setBeers }}>
      {children}
    </BeersContext.Provider>
  );
};

export const useBeers = () => useContext(BeersContext);
