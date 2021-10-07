import { useHistory } from "react-router";
import { toast } from "react-toastify";
import { useConfraBeers } from "../../providers/ConfraBeers";

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
      <div>
        <h1>Uma confraternização sem bebidas? Não vai rolar!</h1>
        <button onClick={() => history.push("/")}>Adicionar bebidas</button>
      </div>
    );
  }

  return (
    <div>
      <button onClick={() => history.push("/")}>Home</button>
      <h1>Confraternização</h1>
      <ul>
        {confraBeers.map((item, index) => {
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

export default Confraternization;
