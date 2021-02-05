import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Force from './Component/Force/Force';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Velocity from './Pages/Velocity/Velocity';
import Acceleration from './Pages/Acceleration/Acceleration';

function App() {
  return (
    <Router >
      <Switch>
        <Route exact path to='/'>
          <Home />
        </Route>
        <Route path='/force' >
          <Force />
        </Route>
        <Route path='/velocity' >
          <Velocity />
        </Route>
        <Route to='/acceleration'>
          <Acceleration />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
