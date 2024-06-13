import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { EditMovie } from "./EditMovie";
import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


const MovieCard = () => {
  const { id } = useParams();
  const { data: movie, error, isPending } = useFetch('http://localhost:8000/movies/' + id);
  const history = useHistory();
  const [edit,setEdit]=useState(false)

  const handleClick =async () => {
   await fetch('http://localhost:8000/movies/'  + movie.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    }) 
  }


  return (
    <div className="blog-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { movie && (
        <article>
            <img alt={movie.subtitle} src={movie.image} ></img>
            <h2>{ movie.title }</h2>
            <h3> {movie.subtitle}</h3>
            <p>Description : { movie.description }</p>
            <p>Year : {movie.year}</p>
            <p>Rating : {movie.rating}</p>
           <Link onClick={()=>setEdit(true)} className="edit-movie" to={`/movies/${movie.id}`} >Edit</Link>
          <button style={{marginLeft:"50px"}} onClick={handleClick} >delete</button>
        </article>
      )}
      {edit && <EditMovie  />}
    </div>
  );
}
 
export default MovieCard;