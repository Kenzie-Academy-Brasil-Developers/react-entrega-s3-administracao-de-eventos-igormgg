import { BeersProvider } from "./Beers";
import { ConfraBeersProvider } from "./ConfraBeers";
import { PromBeersProvider } from "./PromBeers";
import { WeddingBeersProvider } from "./WeddingBeers";

const Providers = ({ children }) => {
  return (
    <BeersProvider>
      <ConfraBeersProvider>
        <PromBeersProvider>
          <WeddingBeersProvider>{children}</WeddingBeersProvider>
        </PromBeersProvider>
      </ConfraBeersProvider>
    </BeersProvider>
  );
};

export default Providers;
