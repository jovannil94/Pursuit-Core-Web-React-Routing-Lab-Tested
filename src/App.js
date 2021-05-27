import "./App.css";
import Homepage from "../src/Components/Home";
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path={"/home"} component={Homepage}></Route>
      </Switch>
    </div>
  );
}

export default App;
