import { useHistory } from "react-router";
import { toast } from "react-toastify";
import { useWeddingBeers } from "../../providers/WeddingBeers";
import { Container, NoDrinksContainer } from "../styles";

const Wedding = () => {
  const history = useHistory();

  const { weddingBeers, setWeddingBeers } = useWeddingBeers();

  const clickRemoveBeer = (item) => {
    const filteredBeers = weddingBeers.filter((beer) => beer.id !== item.id);
    setWeddingBeers(filteredBeers);
    toast.success(`Não terá mais ${item.name} na confraternização =(`);
  };

  if (weddingBeers.length === 0) {
    return (
      <NoDrinksContainer>
        <div className="header">
          <h1>Casamento</h1>
          <div>
            <button onClick={() => history.push("/")}>Bebidas</button>
            <button onClick={() => history.push("/confraternization")}>
              Confraternização
            </button>
            <button onClick={() => history.push("/prom")}>Formatura</button>
          </div>
        </div>
        <div className="noDrinksDivFather">
          <div className="noDrinksDiv">
            <h1>Um casamento sem bebidas?</h1>
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
        <h1>Casamento</h1>
        <div>
          <button onClick={() => history.push("/")}>Bebidas</button>
          <button onClick={() => history.push("/confraternization")}>
            Confraternização
          </button>
          <button onClick={() => history.push("/prom")}>Formatura</button>
        </div>
      </div>
      <ul>
        {weddingBeers.map((item, index) => {
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

export default Wedding;
