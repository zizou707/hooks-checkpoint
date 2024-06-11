import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";


const MovieCard = () => {
  const { id } = useParams();
  const { data: movie, error, isPending } = useFetch('http://localhost:8000/movies/' + id);
  const history = useHistory();

  const handleClick = () => {
    fetch('http://localhost:8000/movies/' + movie.id, {
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
            <img src={movie.image} ></img>
            <h2>{ movie.title }</h2>
            <h3> {movie.subtitle}</h3>
            <p>Description : { movie.description }</p>
            <p>Year : {movie.year}</p>
            <p>Rating : {movie.rating}</p>
          <button onClick={handleClick} >delete</button>
        </article>
      )}
    </div>
  );
}
 
export default MovieCard;