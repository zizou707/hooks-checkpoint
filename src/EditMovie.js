import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';


export const EditMovie = () => {
    const { id } = useParams();
    // const { data: movie, error, isPending } = useFetch('http://localhost:8000/movies/' + id);
    const [title, setTitle] = useState();
    const [subTitle, setSubTitle] = useState();
    const [year,setYear]=useState();
    const [rating,setRating]=useState();
    const [description,setDescription]=useState();
    const history=useHistory();
    

   

  function handleEdit(e) {

    e.preventDefault();
      const movie = { title, subTitle, description,year,rating };

    fetch('http://localhost:8000/movies/'+id , {
      method: 'PATCH',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(movie)
    }).then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the JSON response
      })
      .then(data => {
        console.log('Resource updated successfully:', data);
        // history.go(-1);
        history.push('/');
      })
      .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
      });
  } 

  return (   
     <div>
        <form onSubmit={handleEdit}>
        <label>Movie title:</label><br/>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        /><br/>
        <label>Movie SubTitle :</label><br/>
        <input
          required
          value={subTitle}
          onChange={(e) => setSubTitle(e.target.value)}
        ></input><br/>
        <label>Movie year:</label><br/>
        <input
          value={year}
          onChange={(e) => setYear(e.target.value)}
        ></input><br/>
        <label>Movie Rating:</label><br/>
        <input type="number"  value={rating}  onChange={e=>setRating(e.target.value)}></input><br/>
        <label>Movie Description:</label><br/>
        <textarea style={{marginRight:"15px",width:"220px"}} placeholder="about the film" rows="2" value={description}  onChange={e=>setDescription(e.target.value)}></textarea>
        <button >Edit Movie</button>
       </form>
    </div> 
  )
}
