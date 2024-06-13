import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Cinema Movies</h1>
      <div className="links">
        <Link to="/" className="home">Home</Link>
        <Link to="/movies" className="search">Search</Link>
        <Link to="/create" className="create">Add Movie</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;