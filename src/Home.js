import MovieList from "./MovieList";
import useFetch from "./useFetch";

const Home = () => {
  const { error, isPending, data: movies } = useFetch('http://localhost:8000/movies')
    


  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { movies && <MovieList movies={ movies } /> }
    </div>
  );
}
 
export default Home;
