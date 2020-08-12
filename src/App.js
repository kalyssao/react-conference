import React from 'react';
import './App.css';

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Carousel from './components/Carousel'

function App() {
  return (
    <div className="App">
        <Navbar/>
        <header className="App-header">
        </header>
        <Hero/>
        <Carousel/>
    </div>
  );
}

export default App;
