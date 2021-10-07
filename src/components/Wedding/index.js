import { useHistory } from "react-router";
import { useWeddingBeers } from "../../providers/WeddingBeers";

const Wedding = () => {
  const history = useHistory();

  const { weddingBeers } = useWeddingBeers();

  if (weddingBeers.length === 0) {
    return (
      <div>
        <h1>Um casamento sem bebidas? Não vai rolar!</h1>
        <button onClick={() => history.push("/")}>Adicionar bebidas</button>
      </div>
    );
  }

  return (
    <div>
      <button onClick={() => history.push("/")}>Home</button>
      <h1>Casamento</h1>
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
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Wedding;
