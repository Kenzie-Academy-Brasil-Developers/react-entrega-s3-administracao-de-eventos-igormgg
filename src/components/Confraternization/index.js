import { useHistory } from "react-router";
import { toast } from "react-toastify";
import { useConfraBeers } from "../../providers/ConfraBeers";
import { Container, NoDrinksContainer } from "../styles";

const Confraternization = () => {
  const history = useHistory();

  const { confraBeers, setConfraBeers } = useConfraBeers();

  const clickRemoveBeer = (item) => {
    const filteredBeers = confraBeers.filter((beer) => beer.id !== item.id);
    setConfraBeers(filteredBeers);
    toast.success(`Não terá mais ${item.name} na confraternização =(`);
  };

  if (confraBeers.length === 0) {
    return (
      <NoDrinksContainer>
        <div className="header">
          <h1>Confraternização</h1>
          <div>
            <button onClick={() => history.push("/")}>Bebidas</button>
            <button onClick={() => history.push("/prom")}>Formatura</button>
            <button onClick={() => history.push("/wedding")}>Casamento</button>
          </div>
        </div>
        <div className="noDrinksDivFather">
          <div className="noDrinksDiv">
            <h1>Uma confraternização sem bebidas?</h1>
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
        <h1>Confraternização</h1>
        <div>
          <button onClick={() => history.push("/")}>Bebidas</button>
          <button onClick={() => history.push("/prom")}>Formatura</button>
          <button onClick={() => history.push("/wedding")}>Casamento</button>
        </div>
      </div>
      <ul className="drinksDiv">
        {confraBeers.map((item, index) => {
          return (
            <li key={index}>
              <div>
                <h1>{item.id}</h1>
                <h2>{item.name}</h2>
                <img alt={item.name} src={item.image_url} />
                <h3>Fabricação: {item.first_brewed}</h3>
                <h4>
                  {item.volume.value} {item.volume.unit}
                </h4>
                <h5>{item.description}</h5>
              </div>
              <div>
                <button onClick={() => clickRemoveBeer(item)}>Remover</button>
              </div>
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export default Confraternization;
