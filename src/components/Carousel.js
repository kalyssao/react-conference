import React from 'react'
import Speaker from './Speaker'

// could take a speakers object prop (result of API call maybe?) and pass each to
// the individual speakers component -> using map() maybe?
function Carousel(  ) {
    return (
        <div>
            <h1>This is a carousel for speakers</h1>
            <Speaker name="Kalyssa" picture="url" title="10x Developer"/>
        </div>
    )
}

export default Carousel