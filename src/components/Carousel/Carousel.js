import React from 'react'
import Speaker from './Speaker'
import './Carousel.css'

const url = 'https://images.generated.photos/YS3pbK8dlq8P3DlRmEkmFBM1OdR29xRYN8K5fEqRUK4/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA3ODUxOTFfMDU2/NTMwMF8wMjQwNDYw/LmpwZw.jpg'
// could take a speakers object prop (result of API call maybe?) and pass each to
// the individual speakers component -> using map() maybe?
function Carousel(  ) {
    return (
        <div className="CarouselWrapper">
            <div className="carousel-blurb">
                <h1>Speakers</h1>
            </div>
            
            <div className="carousel-grid">
                <Speaker name="Kalyssa Owusu" picture={url} title="10x Developer"/>
                <Speaker name="Yoofi Brown-Pobee" picture={url} title="10x Developer"/>
                <Speaker name="Nana Obeng-Marnu" picture={url} title="10x Developer"/>
                <Speaker name="Samuel Bunyan" picture={url} title="10x Developer"/>
                <Speaker name="Enam Abledu" picture={url} title="10x Developer"/>
                <Speaker name="Yaya DaCosta" picture={url} title="10x Developer"/>
                <Speaker name="Elom Tamaklo" picture={url} title="10x Developer"/>
            </div>
        </div>
    )
}

export default Carousel