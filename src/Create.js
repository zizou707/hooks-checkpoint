import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [year,setYear]=useState('');
  const [rating,setRating]=useState('');
  const [description,setDescription]=useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const movie = { title, subTitle, description,year,rating };

    fetch('http://localhost:8000/movies/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(movie)
    }).then(() => {
      // history.go(-1);
      history.push('/');
    })
  }

  return (
    <div className="create">
      <h2>Add a New Movie</h2>
      <form onSubmit={handleSubmit}>
        <label>Movie title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Movie SubTitle :</label>
        <input
          required
          value={subTitle}
          onChange={(e) => setSubTitle(e.target.value)}
        ></input>
        <label>Movie year:</label>
        <input
          value={year}
          onChange={(e) => setYear(e.target.value)}
        ></input>
        <label>Movie Rating:</label>
        <input type="number"  value={rating}  onChange={e=>setRating(e.target.value)}></input>
        <label>Movie Description:</label>
        <textarea placeholder="about the film" rows="2" value={description}  onChange={e=>setDescription(e.target.value)}></textarea>
        <button>Add Movie</button>
      </form>
    </div>
  );
}
 
export default Create;