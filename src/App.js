import React from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Carousel from './components/Carousel'

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Hero/>
        <Carousel/>
    </div>
  );
}

export default App;
