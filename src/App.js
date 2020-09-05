import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import NotFound from './Components/NotFound/NotFound';
import Details from './Components/Details/Details';
import HomeOverview from './Components/HomeOverview/HomeOverview';
import { Container } from '@material-ui/core';

function App() {
  return (
    <>   
    <Header></Header>
    <Container>
    <Router>
      <Switch>
        <Route exact path="/" >
        <HomeOverview></HomeOverview>
      </Route>
      <Route path="/home">
      <HomeOverview></HomeOverview>
      </Route>
      <Route path="/about/:friendId">
        <Details></Details>
      </Route>
      <Route path="/*">
      <NotFound></NotFound>
      </Route>

      </Switch>
    </Router></Container></>
  );
}

export default App;
