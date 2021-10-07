import { useHistory } from "react-router";
import { toast } from "react-toastify";
import { usePromBeers } from "../../providers/PromBeers";

const Prom = () => {
  const history = useHistory();

  const { promBeers, setPromBeers } = usePromBeers();

  const clickRemoveBeer = (item) => {
    const filteredBeers = promBeers.filter((beer) => beer.id !== item.id);
    setPromBeers(filteredBeers);
    toast.success(`Não terá mais ${item.name} na confraternização =(`);
  };

  if (promBeers.length === 0) {
    return (
      <div>
        <h1>Uma formatura sem bebidas? Não vai rolar!</h1>
        <button onClick={() => history.push("/")}>Adicionar bebidas</button>
      </div>
    );
  }

  return (
    <div>
      <div className="header">
        <h1>Formatura</h1>
        <button onClick={() => history.push("/")}>Bebidas</button>
        <button onClick={() => history.push("/confraternization")}>
          Contraternização
        </button>
        <button onClick={() => history.push("/wedding")}>Casamento</button>
      </div>
      <ul>
        {promBeers.map((item, index) => {
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
              <button onClick={() => clickRemoveBeer(item)}>Remover</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Prom;
