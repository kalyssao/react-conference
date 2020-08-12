import React from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Carousel from './components/Carousel/Carousel'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Hero/>
        <Carousel/>
        <Footer/>
    </div>
  );
}

export default App;
