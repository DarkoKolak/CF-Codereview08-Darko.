import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, } from "react-router-dom";
import "./App.css";
import HeaderComponent from "./header";
import FooterComponent from "./FooterComponent";
import MainFirstComponent from "./MainFIrstComponent";
import MainSecondComponent from "./MainSecondComponent";
import MainThirdComponent from "./MainThirdComponent";
import RedirectMain from "./RedirectMain";

function App() {
  return (
    <div className="App">
        <Router>

    <HeaderComponent/>
    <Switch>
    <Route path ="/RedirectMain" exact component = {RedirectMain}/>
    <Route path ="/MainFirstComponent" exact component = {MainFirstComponent}/>
    <Route path ="/MainSecondComponent" exact component = {MainSecondComponent}/>
    <Route path ="/MainThirdComponent" exact component = {MainThirdComponent}/>
    <Redirect to = "/RedirectMain"/>
    </Switch>
    </Router>
    <FooterComponent/>
    </div>
  );
}

export default App;
