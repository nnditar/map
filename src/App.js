import React from 'react';
import reactDom from 'react-dom';
import Home from './pages/Home';
import About from './pages/About';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Notfound from './pages/Notfound';
    
const App = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/about" exact component={About}/>
      <Route component={Notfound}/>
    </Switch>
    </BrowserRouter>
    
  );
};

export default App;