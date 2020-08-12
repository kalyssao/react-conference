import React from "react"
import HeroButton from './HeroButton'
import './Hero.css'

function Hero() {
    return (
        <div className="HeroWrapper">
            <div>
                <h1>This is a hero</h1> 
                <HeroButton/>
            </div>
            
            <h4>Are you a student or someone from a low income country? Apply for a scholarship <a href="/">here</a></h4>
            
        </div>
    )
}

export default Hero