import { useHistory } from "react-router";
import { toast } from "react-toastify";
import { usePromBeers } from "../../providers/PromBeers";
import { Container, NoDrinksContainer } from "../styles";

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
      <NoDrinksContainer>
        <div className="header">
          <h1>Formatura</h1>
          <div>
            <button onClick={() => history.push("/")}>Bebidas</button>
            <button onClick={() => history.push("/confraternization")}>
              Contraternização
            </button>
            <button onClick={() => history.push("/wedding")}>Casamento</button>
          </div>
        </div>
        <div className="noDrinksDivFather">
          <div className="noDrinksDiv">
            <h1>Uma formatura sem bebidas?</h1>
            <h1>Não vai rolar!</h1>
            <button onClick={() => history.push("/")}>Adicionar bebidas</button>
          </div>
        </div>
      </NoDrinksContainer>
    );
  }

  return (
    <Container>
      <div className="header">
        <h1>Formatura</h1>
        <div>
          <button onClick={() => history.push("/")}>Bebidas</button>
          <button onClick={() => history.push("/confraternization")}>
            Contraternização
          </button>
          <button onClick={() => history.push("/wedding")}>Casamento</button>
        </div>
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
    </Container>
  );
};

export default Prom;
