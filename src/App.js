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
import Pressure from './Pages/Pressure/Pressure'
import Work from './Pages/Work/Work';
import Power from './Pages/Power/Power';
import Density from './Pages/Density/Density';
import Buoyancy from './Pages/Buoyancy/Buoyancy';
import KineticEnergy from './Pages/KineticEnergy/KineticEnergy';
import PotentialEnergy from './Pages/PotentialEnergy/PotentialEnergy';
import ChallengeSCC from './Pages/ChallengeSSC/ChallengeSCC';
import FirstDayScc from './Pages/FirstDaySSC/FirstDayScc';

function App() {
  return (
    <Router >
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/challenge-ssc'>
          <ChallengeSCC />
        </Route>
        <Route path='/first-day-ssc'>
          <FirstDayScc />
        </Route>
        <Route path='/velocity' >
          <Velocity />
        </Route>
        <Route path='/acceleration'>
          <Acceleration />
        </Route>
        <Route path='/force' >
          <Force />
        </Route>
        <Route path='/work' >
          <Work />
        </Route>
        <Route path='/kinetic-energy'>
          <KineticEnergy />
        </Route>
        <Route path='/potential-energy'>
          <PotentialEnergy />
        </Route>
        <Route path='/power'>
          <Power />
        </Route>
        <Route path='/pressure'>
          <Pressure />
        </Route>
        <Route path='/density'>
          <Density />
        </Route>
        <Route path='/Buoyancy'>
          <Buoyancy />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
