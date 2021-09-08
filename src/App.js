import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Button } from 'react-bootstrap';
import Home from "./Components/Home/Home";
import NotFound  from "./Components/NotFound/NotFound";
import LeagueDetails from "./Components/LeagueDetails/LeagueDetails";

const App = () => {
  return (
    <Router>

      <Switch>
        <Route exact path='/' component={Home} />
        <Route  path='/home' component={Home} />
        <Route path='/about/:teamId' component={LeagueDetails}/>
        <Route path='*' component={NotFound}/>
      </Switch>
    </Router>
  );
};

export default App;