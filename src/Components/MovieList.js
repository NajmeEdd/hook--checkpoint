import React from 'react'
import MovieCard from './MovieCard'
import {Link} from 'react-router-dom'



  const MovieList = ({movies} )=>{

    return (
        <div >
            <div  >
            <h1 style={{color :'white', margin:'10px' , fontWeight: "normal"}}> Movies </h1>
            </div>
            <div className="row">
            
            {movies.map((MovieInfos,index)=>{
                return (
                    
                // <Link to={`/description/${MovieInfos.description}/${MovieInfos.video}`} style={{textDecoration : "none", color:"black" }}>
                <MovieCard key={index} title={MovieInfos.title} posterUrl={MovieInfos.posterUrl} description={MovieInfos.description} rate={MovieInfos.rate} />
                  // </Link> 
                )
            })}
            </div>
        </div>
    )
  }

  export default MovieList