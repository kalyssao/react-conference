import React from 'react'

function Speaker(props) {
    return (
        <div>
            <p>Name is {props.name}</p>
            <p>Picture url is {props.picture}</p>
            <p>Job title is {props.title}</p>
        </div>
    )
}

export default Speaker
