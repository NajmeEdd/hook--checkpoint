  
import React from 'react'
import {Card} from 'react-bootstrap'
import './MovieCard.css'
import StarRatingComponent from 'react-star-rating-component'


const MovieCard=({title, posterUrl, description, rate} ) =>{

    return(
        <div className='movieCard'>
             <Card className="card">
             <Card.Body >
                    <Card.Img style={{ height: '300px', width: "200px" }} variant="top" src={posterUrl} />
                    
                    <StarRatingComponent name="rate1" starCount={5} value={rate} className='stars' />
                    <Card.Title className="title" >{title}</Card.Title>
                    <Card.Text>
                            {description}
                            </Card.Text> 
                     </Card.Body>
            </Card>
        </div>
    )
}

export default MovieCard