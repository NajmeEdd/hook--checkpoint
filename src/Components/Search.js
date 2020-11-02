import React from 'react'
import './Search.css'

const Search = ( {setInput})=>{

    return (
        <div className = 'searchBarContainer'>
                <input style={{marginLeft: '20px'}} className = 'searchBar' type = "text" placeholder = "Search by movie .." onChange={(e) => setInput(e.target.value)}/>  
        </div>
    )
}

export default Search