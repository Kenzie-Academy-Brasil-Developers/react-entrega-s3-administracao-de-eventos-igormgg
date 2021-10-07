import { Route, Switch } from "react-router";
import Confraternization from "../components/Confraternization";
import Home from "../components/Home";
import Prom from "../components/Prom";
import Wedding from "../components/Wedding";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/confraternization">
        <Confraternization />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/prom">
        <Prom />
      </Route>
      <Route exact path="/wedding">
        <Wedding />
      </Route>
    </Switch>
  );
};

export default Routes;
