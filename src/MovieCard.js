import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { EditMovie } from "./EditMovie";
import { useRef, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Container } from "react-bootstrap";


const MovieCard = () => {
  const { id } = useParams();

  const { data: movie, error, isPending } = useFetch('http://localhost:8000/movies/' + id)
  const history = useHistory();
  const [edit,setEdit]=useState(false);
  const showMore = useRef("Show more");
  const [show,setShow]=useState(false);


  const handleClick=()=>{
    if (!edit){ setEdit(true);
      document.getElementById('edit').innerHTML="Cancel"} 
     else if (edit){setEdit(false) ;
      document.getElementById('edit').innerHTML="Edit"
    }
   }
 console.log(edit);
  const handleDelete =async () => {
   await fetch('http://localhost:8000/movies/'  + movie.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    }) 
  }
const ShowMore=()=>{
   if (showMore.current.innerHTML==="Show video") { 
    showMore.current.innerHTML="Hide";
    setShow(true)
   }else if (showMore.current.innerHTML==="Hide") {
    showMore.current.innerHTML="Show video";
    setShow(false)   
   }
}

  return (
    <div className="blog-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { movie && (
        <article>
            
            <img  alt={movie.subtitle} src={`../public/${movie.image}`} ></img>
            <h2>{ movie.title }</h2>
            <h3> {movie.subtitle}</h3>
            <p>Description : { movie.description }</p>
            <p>Year : {movie.year}</p>
            <p>Rating : {movie.rating}</p>
         <Link id="edit" onClick={handleClick} className="edit-movie" to={`/movies/${movie.id}`} >Edit</Link>
          <button style={{marginLeft:"50px"}} onClick={handleDelete} >delete</button>
          <button style={{marginLeft:"25px"}} ref={showMore} onClick={ShowMore}>Show video</button>
        </article>
      )}
      {edit && <EditMovie {...movie}/>}
      {show && <Container  class="ratio ratio-16x9">
      <iframe src={movie.trailerLink} title="YouTube video" allowFullScreen></iframe>
    </Container>}
    </div>
  );
}
 
export default MovieCard;