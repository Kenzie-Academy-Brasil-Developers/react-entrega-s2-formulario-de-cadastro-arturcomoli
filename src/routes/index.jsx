import { Switch, Route } from "react-router-dom";
import Form from "../pages/Form";
import Home from "../pages/Home";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Form />
      </Route>
      <Route path="/home/:name">
        <Home />
      </Route>
    </Switch>
  );
};
export default Routes;
