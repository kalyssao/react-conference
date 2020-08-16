import React from "react"
import HeroButton from './HeroButton'
import './Hero.css'

function Hero() {
    return (
        <div className="HeroWrapper">
            <div className="hero-welcome">
                <h3>WELCOME</h3>
                <h1 id="hero-title">FAKE REACT CONFERENCE</h1> 
                <br/>
                <h3>A fake conference in which people who like React but aren't very good can attend to mope about and eventually write some code</h3>
            </div>
            <div>
                <HeroButton/>
                <h4>If you don't have the means to afford a ticket you can apply for a scholarship <a href="/">here</a></h4>
            </div>
            
            
        </div>
    )
}

export default Hero