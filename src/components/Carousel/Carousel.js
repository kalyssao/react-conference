import React from 'react'
import Speaker from './Speaker'
import './Carousel.css'

// could take a speakers object prop (result of API call maybe?) and pass each to
// the individual speakers component -> using map() maybe?
function Carousel(  ) {
    return (
        <div className="CarouselWrapper">
            <div className="carousel-blurb">
                <h1>This is a carousel for speakers</h1>
            </div>
            
            <div className="carousel-grid">
                <Speaker name="Kalyssa" picture="url" title="10x Developer"/>
                <Speaker name="Kalyssa" picture="url" title="10x Developer"/>
                <Speaker name="Kalyssa" picture="url" title="10x Developer"/>
                <Speaker name="Kalyssa" picture="url" title="10x Developer"/>
                <Speaker name="Kalyssa" picture="url" title="10x Developer"/>
                <Speaker name="Kalyssa" picture="url" title="10x Developer"/>
                <Speaker name="Kalyssa" picture="url" title="10x Developer"/>
            </div>
        </div>
    )
}

export default Carousel