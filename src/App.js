import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import './App.css';
import TeamPage from './components/TeamPage/TeamPage'; 
import Header from './components/Header/Header';
import InformationPage from './components/InformationPage/InformationPage';
import Home from './components/HomePage/Home';
import NavBar from './components/HomePage/NavBar/NavBar';


function App() {
  return (
    <Router>
    <div>
      <Header/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <TeamPage />
        </Route>
        <Route path="/info">
          <InformationPage />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
