import React from 'react'
import './Carousel.css'

function Speaker(props) {
    return (
        <div className="SpeakerWrapper">
            <p>Name is {props.name}</p>
            <p>Picture url is {props.picture}</p>
            <p>Job title is {props.title}</p>
        </div>
    )
}

export default Speaker
