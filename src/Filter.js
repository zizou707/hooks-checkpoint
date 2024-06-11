import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom/cjs/react-router-dom.min';



function Filter() {
  const [title ,setTitle]=useState("");
  const [rating ,setRating]=useState(0);
  const [result,setResult]=useState()

  
  function handleClick(){
   
  fetch(`http://localhost:8000/movies`)
    .then(res => { return res.json()})
      .then(  data=>  {
        if (title !==""){
          setResult(data.filter(d=>d.title === title))}
          else if (rating > 0) { 
             setResult(data.filter(d=>d.rating === rating))
            } 
      }
  );  
} 
  return (
    <div  className='search-movie'>
         <div>
           <h3>Title : </h3>
           <input type="text" onChange={e=>setTitle(e.target.value)} style={{width:"200px",height:"25px",fontSize:"1.2rem"}} placeholder="Enter a title"/>
        </div>
        <div>
          <h3>Rating : </h3>
          <input type="text" onChange={e=>setRating(e.target.value)} style={{width:"40px",fontSize:"1.2rem"}} placeholder="0"/>
        </div>
        <button onClick={()=>handleClick()} style={{position:"absolute",right:"450px",top:"200px"}}>Search</button>
        <div>
          {(result) && result.map(movie=>{return(<Link key={movie.id} to={`/movies/${movie.id}`}>
            <img  src={movie.image} ></img>
            <h2>{ movie.title }</h2>
            <h4> {movie.subtitle}</h4>
            <p>Description : { movie.description }</p>
            <p>Year : {movie.year}</p>
            <p>Rating : {movie.rating}</p>
          </Link>)})}

        </div>
    </div>
  )
  
}
export default Filter