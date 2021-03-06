import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/home.js";
// import Information from "./components/pages/Information";
import Team from './components/pages/TeamPage/Team.js';
import Contact from "./components/pages/Contact";
import Information from "./components/pages/InformationPage/Information";
import Login from "./components/pages/LoginSignUpPage/Login.js";
import Signup from "./components/pages/LoginSignUpPage/Signup.js";
//import meidaLogin from "./components/pages/LoginSignUpPage/mediaLogin";

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/information" component={Information} />
                    <Route path="/team" component={Team} />
                    <Route path="/contect" component={Contact} />
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup}/>
                    
                </Switch>
            </Router>
        </>
    );
}

export default App;
