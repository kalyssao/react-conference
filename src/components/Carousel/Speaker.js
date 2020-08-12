import React from 'react'
import './Carousel.css'

function Speaker(props) {
    return (
        <div className="SpeakerWrapper">
            <img alt="speaker" className="speaker-image" src={props.picture} />
            
            <div className="speaker-details">
                <h4>{props.name}</h4>
                <p>{props.title}</p>
            </div>
            
        </div>
    )
}

export default Speaker
