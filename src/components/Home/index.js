import { useHistory } from "react-router";
import { toast } from "react-toastify";
import { useBeers } from "../../providers/Beers";
import { useConfraBeers } from "../../providers/ConfraBeers";
import { usePromBeers } from "../../providers/PromBeers";
import { useWeddingBeers } from "../../providers/WeddingBeers";

const Home = () => {
  const history = useHistory();

  const { beers } = useBeers();
  const { confraBeers, setConfraBeers } = useConfraBeers();
  const { promBeers, setPromBeers } = usePromBeers();
  const { weddingBeers, setWeddingBeers } = useWeddingBeers();

  const handleConfraBeersClick = (item) => {
    const findBeer = beers.find((prd) => prd.id === item.id);
    if (!confraBeers.includes(findBeer)) {
      setConfraBeers([...confraBeers, item]);
      toast.success(`${item.name} adicionada à confraternização.`);
    } else {
      toast.error("Essa bebida já foi adicionada à confraternização!");
    }
  };

  const handlePromBeersClick = (item) => {
    const findBeer = beers.find((prd) => prd.id === item.id);
    if (!promBeers.includes(findBeer)) {
      setPromBeers([...promBeers, item]);
      toast.success(`${item.name} adicionada à formatura.`);
    } else {
      toast.error("Essa bebida já foi adicionada à formatura!");
    }
  };

  const handleWeddingBeersClick = (item) => {
    const findBeer = beers.find((prd) => prd.id === item.id);
    if (!weddingBeers.includes(findBeer)) {
      setWeddingBeers([...weddingBeers, item]);
      toast.success(`${item.name} adicionada ao casamento.`);
    } else {
      toast.error("Essa bebida já foi adicionada ao casamento!");
    }
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => history.push("/confraternization")}>Confra</button>
      <button onClick={() => history.push("/prom")}>Prom</button>
      <button onClick={() => history.push("/wedding")}>Wedding</button>
      <ul>
        {beers.map((item, index) => {
          return (
            <li key={index}>
              <h1>{item.id}</h1>
              <h2>{item.name}</h2>
              <img alt={item.name} src={item.image_url} />
              <h3>{item.first_brewed}</h3>
              <h4>{item.description}</h4>
              <h5>
                {item.volume.value} {item.volume.unit}
              </h5>
              <button onClick={() => handleConfraBeersClick(item)}>
                Adicionar à confraternização
              </button>
              <button onClick={() => handlePromBeersClick(item)}>
                Adicionar à formatura
              </button>
              <button onClick={() => handleWeddingBeersClick(item)}>
                Adicionar ao casamento
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
