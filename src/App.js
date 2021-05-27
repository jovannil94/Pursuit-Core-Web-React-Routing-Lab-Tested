import "./App.css";
import Homepage from "../src/Components/Home";
import CatPage from "../src/Components/CatPage";
import DogPage from "./Components/DogPage";
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path={"/"} component={Homepage}/>
        <Route exact path={"/cat"} component={CatPage}/>
        <Route exact path={"/dog"} component={DogPage}/>
      </Switch>
    </div>
  );
}

export default App;
