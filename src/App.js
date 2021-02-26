import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/home.js";
// import Information from "./components/pages/Information";
import Team from './components/pages/TeamPage/Team.js';
import Contact from "./components/pages/Contact";

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    {/* <Route path="/information" component={Information} /> */}
                    <Route path="/team" component={Team} />
                    <Route path="/contect" component={Contact} />
                </Switch>
            </Router>
        </>
    );
}

export default App;
