import React from 'react';
import { Router, Switch, Route } from 'react-router-dom'
import './App.css';

import history from './history'

import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Carousel from './components/Carousel/Carousel'
import Footer from './components/Footer/Footer'
import Schedule from './components/Schedule/Schedule'

function App() {
  return (
      <Router history={history} >
          <div className="App">
            <Navbar/>
            <Switch>
                <Route
                  path="/schedule" component={Schedule}>
                </Route>
            </Switch>
            <Hero/>
            <Carousel/>
            <Footer/>
        </div>
      </Router>
  );
}

export default App;
